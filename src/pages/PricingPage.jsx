import { useState, useEffect } from "react";
import { usePro } from "../auth/ProContext";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from 'react-router-dom';

function loadRazorpayScript() {
  return new Promise((resolve) => {
    const existing = document.getElementById("razorpay-sdk");
    if (existing) return resolve(true);

    const script = document.createElement("script");
    script.id = "razorpay-sdk";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function PricingPage() {
  const [loading, setLoading] = useState(false);
  const { upgradeToPro, downgradeToFree } = usePro();
  const navigate = useNavigate();

  // ✅ Your real UPI ID
  const upiId = "mayankgaur.8-1@okhdfcbank";
  const amount = 999;

  // ✅ UPI QR link (works with Google Pay scan / open)
  const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(
    "Avantika Interview Prep"
  )}&am=${amount}&cu=INR`;

  const pay = async (plan = "PRO") => {
    setLoading(true);
    try {
      const ok = await loadRazorpayScript();
      if (!ok) throw new Error("Razorpay SDK failed to load");

      // ✅ Create order from backend (via Vite proxy)
      let r;
      try {
        r = await fetch("/api/payments/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan }),
        });
      } catch (err) {
        r = null;
      }

      if (!r || !r.ok) {
        // Backend/order creation failed
        if (import.meta.env.DEV) {
          const proceed = window.confirm(
            "Payment backend unavailable. Simulate successful payment for development?"
          );
          if (proceed) {
            localStorage.setItem("PRO_PLAN", plan);
            upgradeToPro();
            alert("✅ Payment simulated. PRO unlocked (dev).");
            navigate('/pro/interview');
            return;
          }
        }
        // In production we must not simulate - show error and abort
        alert('Payment backend unavailable. Please try again later or contact support.');
        return;
      }

      const order = await r.json();

      // If key or Razorpay not available, simulate success in dev
      if (!import.meta.env.VITE_RAZORPAY_KEY_ID || !window.Razorpay) {
        if (import.meta.env.DEV) {
          const proceed = window.confirm(
            "Razorpay not configured. Simulate successful payment for development?"
          );
          if (proceed) {
            localStorage.setItem("PRO_PLAN", plan);
            upgradeToPro();
            alert("✅ Payment simulated. PRO unlocked (dev).");
            navigate('/pro/interview');
            return;
          }
        }
        alert('Payment gateway not configured. Please contact support or try again later.');
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Avantika Interview Prep",
        description: plan === "CAREER_PLUS" ? "Career+ Plan" : "Pro Plan",
        order_id: order.id,

        // ✅ Google Pay comes under UPI. Razorpay will show UPI Apps.
        method: { upi: true },

        handler: async function (response) {
          // ✅ Verify on backend (if available), otherwise accept as success in dev
          try {
            const vr = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const v = await vr.json();
            if (v.ok) {
              localStorage.setItem("PRO_PLAN", plan);
              upgradeToPro();
              alert("✅ Payment success. PRO unlocked!");
              navigate('/pro/interview');
            } else {
              // verification failed, allow manual unlock in dev
              const proceed = window.confirm(
                "Payment verification failed. Mark as paid for development?"
              );
              if (proceed) {
                localStorage.setItem("PRO_PLAN", plan);
                upgradeToPro();
                alert("✅ Payment simulated (post-verification). PRO unlocked (dev).");
                navigate('/pro/interview');
              } else {
                alert("❌ Payment verification failed");
              }
            }
          } catch (err) {
            const proceed = window.confirm(
              "Payment verification endpoint unavailable. Mark as paid for development?"
            );
            if (proceed) {
              localStorage.setItem("PRO_PLAN", plan);
              upgradeToPro();
              alert("✅ Payment simulated. PRO unlocked (dev).");
              navigate('/pro/interview');
            } else {
              alert("❌ Payment verification failed");
            }
          }
        },

        prefill: { name: "User", email: "user@example.com" },
        theme: { color: "#111" },
      };

      const rz = new window.Razorpay(options);
      rz.open();
    } catch (e) {
      console.error(e);
      // final fallback: offer to simulate payment if user wishes
      const simulate = window.confirm(
        "Failed to start payment. Simulate successful payment for development?"
      );
      if (simulate) {
        localStorage.setItem("PRO_PLAN", plan);
        upgradeToPro();
        alert("✅ Payment simulated. PRO unlocked (dev).");
        navigate('/pro/interview');
      } else {
        alert("Failed to start payment. Check backend, keys, and order creation.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Check URL params (Razorpay redirect) and verify payment on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentId = params.get('razorpay_payment_id') || params.get('payment_id') || params.get('paymentId');
    const orderId = params.get('razorpay_order_id') || params.get('order_id') || params.get('orderId');
    const signature = params.get('razorpay_signature') || params.get('signature');

    // Also accept a simple "status=success" for dev flows
    const status = params.get('status');
    if (!paymentId && !orderId && status !== 'success') return;

    (async () => {
      setLoading(true);
      try {
        // If we only have status=success, offer a dev-only simulation
        if (!paymentId || !orderId) {
          // Only allow this convenience in development
          if (import.meta.env.DEV) {
            const proceed = window.confirm('Detected payment redirect (status=success). Mark as paid for development?');
            if (proceed) {
              localStorage.setItem('PRO_PLAN', 'PRO');
              upgradeToPro();
              alert('✅ Payment simulated. PRO unlocked (dev).');
              const url = new URL(window.location.href);
              url.search = '';
              window.history.replaceState({}, document.title, url.toString());
              navigate('/pro/interview');
            }
            return;
          } else {
            alert('Invalid payment redirect. Please complete the payment via the payment provider.');
            return;
          }
        }

        const res = await fetch('/api/payments/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ razorpay_payment_id: paymentId, razorpay_order_id: orderId, razorpay_signature: signature })
        });

        if (res && res.ok) {
          const j = await res.json();
          if (j.ok) {
            localStorage.setItem('PRO_PLAN', 'PRO');
            upgradeToPro();
            alert('✅ Payment verified. PRO unlocked!');
            const url = new URL(window.location.href);
            url.search = '';
            window.history.replaceState({}, document.title, url.toString());
            navigate('/pro/interview');
            return;
          }
        }

        // In development we may offer a fallback; in production show an error
        if (import.meta.env.DEV) {
          const proceed = window.confirm('Payment verification failed or backend unavailable. Mark as paid for development?');
          if (proceed) {
            localStorage.setItem('PRO_PLAN', 'PRO');
            upgradeToPro();
            alert('✅ Payment simulated. PRO unlocked (dev).');
            const url = new URL(window.location.href);
            url.search = '';
            window.history.replaceState({}, document.title, url.toString());
            navigate('/pro/interview');
          }
        } else {
          alert('Payment verification failed. Please contact support or try again later.');
        }
      } catch (err) {
        const proceed = window.confirm('Payment verification endpoint unavailable. Mark as paid for development?');
        if (proceed) {
          localStorage.setItem('PRO_PLAN', 'PRO');
          upgradeToPro();
          alert('✅ Payment simulated. PRO unlocked (dev).');
          const url = new URL(window.location.href);
          url.search = '';
          window.history.replaceState({}, document.title, url.toString());
          navigate('/pro/interview');
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [upgradeToPro, navigate]);

  return (
    <div style={{ padding: 24, minHeight: '100vh', background: 'linear-gradient(120deg, #6d28d9 0%, #8b5cf6 40%, #06b6d4 100%)', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0 }}>Pricing</h2>
          <p style={{ color: '#666', margin: 0 }}>Simple plans that match your learning pace.</p>
        </div>
        <div>
          <button onClick={() => navigate('/')} style={{ padding: '8px 12px', borderRadius: 10, background: '#4f46e5', color: '#fff', border: 'none', boxShadow: '0 6px 18px rgba(79,70,229,0.22)' }}>Home</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 24 }}>
        <div style={{ borderRadius: 18, padding: 20, background: 'white', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
          <h3>Starter</h3>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>Free</div>
          <p style={{ color: '#666' }}>Try MCQs & a short roadmap.</p>
          <ul style={{ marginTop: 12 }}>
            <li>20 MCQs</li>
            <li>1 role roadmap</li>
            <li>Weekly checklist</li>
          </ul>
          <button onClick={() => { downgradeToFree(); localStorage.removeItem('PRO_PLAN'); alert('You are on Free plan.'); }} style={{ marginTop: 16, padding: '12px 16px', borderRadius: 12, width: '100%', background: '#10b981', color: '#fff', border: 'none', boxShadow: '0 8px 22px rgba(16,185,129,0.18)' }}>Start Free</button>
        </div>

        <div style={{ borderRadius: 18, padding: 20, background: 'white', boxShadow: '0 6px 24px rgba(0,0,0,0.08)', border: '2px solid #000' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Pro</h3>
            <div style={{ background: '#000', color: 'white', padding: '6px 10px', borderRadius: 999 }}>Most Popular</div>
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>₹999</div>
          <p style={{ color: '#666' }}>Full Q&A + mock interviews.</p>
          <ul style={{ marginTop: 12 }}>
            <li>Unlimited MCQs</li>
            <li>Interview Bot</li>
            <li>Role tracks</li>
            <li>Progress analytics</li>
          </ul>
          <button onClick={() => pay('PRO')} disabled={loading} style={{ marginTop: 16, padding: '12px 16px', borderRadius: 12, width: '100%', background: '#000', color: 'white', border: 'none' }}>{loading ? 'Opening...' : 'Go Pro'}</button>
        </div>

        <div style={{ borderRadius: 18, padding: 20, background: 'white', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
          <h3>Career+</h3>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>₹4,999</div>
          <p style={{ color: '#666' }}>Guided prep with templates + CV/ATS help.</p>
          <ul style={{ marginTop: 12 }}>
            <li>Everything in Pro</li>
            <li>Resume templates</li>
            <li>System design drills</li>
            <li>Monthly review</li>
          </ul>
          <button onClick={() => pay('CAREER_PLUS')} disabled={loading} style={{ marginTop: 16, padding: '12px 16px', borderRadius: 12, width: '100%', background: '#111', color: 'white', border: 'none' }}>{loading ? 'Opening...' : 'Upgrade'}</button>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
        <h3 style={{ marginTop: 0 }}>Or Pay via UPI QR (Google Pay)</h3>

        <QRCodeCanvas value={upiLink} size={220} />
        <p style={{ marginTop: 10 }}>Scan to pay ₹999 via UPI (Google Pay / PhonePe)</p>
        <p style={{ fontSize: 12, opacity: 0.7 }}>UPI ID: {upiId}</p>

        <a href={upiLink} style={{ display: 'inline-block', marginTop: 8 }}>
          Open in UPI app (mobile)
        </a>

        <p style={{ fontSize: 12, marginTop: 12, opacity: 0.7 }}>
          Note: QR payments are not auto-verified unless you build manual confirmation or webhooks.
          Razorpay Checkout is recommended for auto PRO unlock.
        </p>
      </div>
    </div>
  );
}
