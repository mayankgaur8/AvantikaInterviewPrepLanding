export const SOAP_QUESTIONS = [
  /* =====================================================
     BASIC – 20 QUESTIONS
  ===================================================== */
  {
    id: "soap-b-01",
    level: "Basic",
    q: "What is SOAP?",
    a: "SOAP (Simple Object Access Protocol) is an XML-based messaging protocol used to exchange structured information in web services, typically over HTTP/HTTPS."
  },
  {
    id: "soap-b-02",
    level: "Basic",
    q: "What are the main parts of a SOAP message?",
    a: "SOAP message includes Envelope, Header (optional), Body (mandatory), and Fault (optional for errors)."
  },
  {
    id: "soap-b-03",
    level: "Basic",
    q: "What is a WSDL?",
    a: "WSDL (Web Services Description Language) is an XML document that describes a SOAP service: operations, messages, bindings, and endpoint URL."
  },
  {
    id: "soap-b-04",
    level: "Basic",
    q: "SOAP vs REST in simple words?",
    a: "SOAP is strict XML + contracts (WSDL) + enterprise features; REST is simpler, resource-based, usually JSON, and lighter."
  },
  {
    id: "soap-b-05",
    level: "Basic",
    q: "What are SOAP transport protocols?",
    a: "Most common is HTTP/HTTPS, but SOAP can work over SMTP, JMS, etc. HTTP/HTTPS is most used."
  },
  {
    id: "soap-b-06",
    level: "Basic",
    q: "What is SOAPAction header?",
    a: "A HTTP header used by some SOAP stacks to indicate the intent of the SOAP request (operation). Often required in SOAP 1.1."
  },
  {
    id: "soap-b-07",
    level: "Basic",
    q: "What is a SOAP Fault?",
    a: "SOAP Fault is a standard error structure returned in SOAP response body when an error occurs."
  },
  {
    id: "soap-b-08",
    level: "Basic",
    q: "What is the difference between SOAP 1.1 and SOAP 1.2?",
    a: "SOAP 1.2 uses different content-type (application/soap+xml), improved fault model, and SOAPAction handling differs."
  },
  {
    id: "soap-b-09",
    level: "Basic",
    q: "What is XSD in SOAP services?",
    a: "XSD (XML Schema Definition) defines data types and structure used by SOAP messages. WSDL often references XSD."
  },
  {
    id: "soap-b-10",
    level: "Basic",
    q: "What is contract-first development in SOAP?",
    a: "You design WSDL/XSD first, then generate server/client code. Ensures strict contract and interoperability."
  },
  {
    id: "soap-b-11",
    level: "Basic",
    q: "What is document style vs RPC style in SOAP?",
    a: "Document style sends XML document-like messages; RPC style represents remote procedure calls. Document/literal is most common."
  },
  {
    id: "soap-b-12",
    level: "Basic",
    q: "What is literal vs encoded use in SOAP?",
    a: "Literal follows schema strictly; encoded uses SOAP encoding rules (less common). Document/literal is preferred."
  },
  {
    id: "soap-b-13",
    level: "Basic",
    q: "What is WS-* in SOAP world?",
    a: "WS-* is a set of standards like WS-Security, WS-ReliableMessaging, WS-Addressing for enterprise requirements."
  },
  {
    id: "soap-b-14",
    level: "Basic",
    q: "What is WS-Security used for?",
    a: "It secures SOAP messages using tokens (UsernameToken, X.509, SAML), signatures, and encryption at message level."
  },
  {
    id: "soap-b-15",
    level: "Basic",
    q: "What is the purpose of SOAP Header?",
    a: "Headers carry metadata like security tokens, routing info, transaction IDs, correlation IDs, etc."
  },
  {
    id: "soap-b-16",
    level: "Basic",
    q: "Give a simple SOAP request example.",
    a: "SOAP request is XML inside Envelope/Body.",
    answer: {
      summary: "Example SOAP request for getUser operation.",
      codeTitle: "SOAP Request (XML)",
      code: `POST /UserService HTTP/1.1
Host: example.com
Content-Type: text/xml; charset=utf-8
SOAPAction: "getUser"

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:usr="http://example.com/user">
  <soapenv:Header/>
  <soapenv:Body>
    <usr:getUser>
      <usr:id>101</usr:id>
    </usr:getUser>
  </soapenv:Body>
</soapenv:Envelope>`
    }
  },
  {
    id: "soap-b-17",
    level: "Basic",
    q: "What does 'endpoint' mean in SOAP?",
    a: "Endpoint is the service URL where SOAP requests are sent (defined in WSDL under service/port/address)."
  },
  {
    id: "soap-b-18",
    level: "Basic",
    q: "What is JAXB used for in SOAP?",
    a: "JAXB converts between XML and Java objects (marshalling/unmarshalling), commonly used by JAX-WS/CXF."
  },
  {
    id: "soap-b-19",
    level: "Basic",
    q: "What is marshalling and unmarshalling?",
    a: "Marshalling converts Java objects to XML; unmarshalling converts XML to Java objects."
  },
  {
    id: "soap-b-20",
    level: "Basic",
    q: "What are common SOAP tools/frameworks in Java?",
    a: "JAX-WS (Metro), Apache CXF, Spring-WS. wsimport is used for client code generation from WSDL."
  },

  /* =====================================================
     INTERMEDIATE – 20 QUESTIONS
  ===================================================== */
  {
    id: "soap-i-01",
    level: "Intermediate",
    q: "What is JAX-WS?",
    a: "JAX-WS is the Java API for XML Web Services, used to build SOAP services and clients (annotations like @WebService)."
  },
  {
    id: "soap-i-02",
    level: "Intermediate",
    q: "How do you create a SOAP service in Java using JAX-WS?",
    a: "Annotate a class with @WebService and publish it (or deploy in a container).",
    answer: {
      summary: "Minimal JAX-WS endpoint example.",
      codeTitle: "JAX-WS Endpoint",
      code: `import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

@WebService
public class HelloSoapService {

  @WebMethod
  public String hello(String name) {
    return "Hello " + name;
  }
}`
    }
  },
  {
    id: "soap-i-03",
    level: "Intermediate",
    q: "How do you generate a SOAP client from WSDL?",
    a: "Using wsimport (JAX-WS) or Apache CXF wsdl2java to generate client stubs.",
    answer: {
      summary: "Client code generation using JAX-WS wsimport.",
      codeTitle: "Command",
      code: `wsimport -keep -s src -p com.example.soap.client http://host/service?wsdl`
    }
  },
  {
    id: "soap-i-04",
    level: "Intermediate",
    q: "What is Apache CXF and why use it?",
    a: "Apache CXF is a popular framework for SOAP/REST. It supports WS-Security, interceptors, WSDL-first and code-first approaches."
  },
  {
    id: "soap-i-05",
    level: "Intermediate",
    q: "What is Spring-WS?",
    a: "Spring Web Services is a Spring project focused on contract-first SOAP services with XML handling and endpoint mappings."
  },
  {
    id: "soap-i-06",
    level: "Intermediate",
    q: "What is WS-Addressing?",
    a: "A standard for adding routing information in SOAP headers (MessageID, ReplyTo, Action), useful for async messaging."
  },
  {
    id: "soap-i-07",
    level: "Intermediate",
    q: "Explain SOAP binding styles: document/literal vs rpc/encoded.",
    a: "Document/literal is schema-driven and interoperable; rpc/encoded is older and less interoperable."
  },
  {
    id: "soap-i-08",
    level: "Intermediate",
    q: "What is MTOM in SOAP?",
    a: "MTOM (Message Transmission Optimization Mechanism) efficiently sends binary data (attachments) instead of base64 in XML."
  },
  {
    id: "soap-i-09",
    level: "Intermediate",
    q: "How to send binary files in SOAP?",
    a: "Use MTOM or SOAP with Attachments (SwA). MTOM is modern and efficient."
  },
  {
    id: "soap-i-10",
    level: "Intermediate",
    q: "What is WS-Security UsernameToken?",
    a: "A security token that includes username/password in SOAP Header (often with nonce + timestamp)."
  },
  {
    id: "soap-i-11",
    level: "Intermediate",
    q: "How do you add logging for SOAP requests/responses?",
    a: "In CXF, use LoggingInInterceptor and LoggingOutInterceptor."
  },
  {
    id: "soap-i-12",
    level: "Intermediate",
    q: "What are CXF interceptors?",
    a: "Interceptors allow you to intercept SOAP messages at different phases (in/out/fault) for logging, auth, transformations."
  },
  {
    id: "soap-i-13",
    level: "Intermediate",
    q: "How do you validate SOAP requests with XSD?",
    a: "Enable schema validation using framework features (CXF validation interceptors or Spring-WS validation)."
  },
  {
    id: "soap-i-14",
    level: "Intermediate",
    q: "How does SOAP handle versioning?",
    a: "Common approaches: new namespace, new endpoint, new WSDL version. Avoid breaking contract changes."
  },
  {
    id: "soap-i-15",
    level: "Intermediate",
    q: "Explain the role of namespaces in SOAP.",
    a: "Namespaces avoid element name collisions and define schemas/operations. WSDL defines targetNamespace."
  },
  {
    id: "soap-i-16",
    level: "Intermediate",
    q: "How do SOAP timeouts work in Java clients?",
    a: "Configure connection/read timeout on underlying HTTP client (JAX-WS BindingProvider or CXF client config)."
  },
  {
    id: "soap-i-17",
    level: "Intermediate",
    q: "How to call a SOAP service using Spring WebServiceTemplate?",
    a: "Use WebServiceTemplate to marshal request and unmarshal response.",
    answer: {
      summary: "Spring-WS client sample using WebServiceTemplate.",
      codeTitle: "Spring-WS Client",
      code: `public class SoapClient {
  private final WebServiceTemplate webServiceTemplate;

  public SoapClient(WebServiceTemplate webServiceTemplate) {
    this.webServiceTemplate = webServiceTemplate;
  }

  public Object call(Object request) {
    return webServiceTemplate.marshalSendAndReceive("http://host/service", request);
  }
}`
    }
  },
  {
    id: "soap-i-18",
    level: "Intermediate",
    q: "What is SOAP Fault structure?",
    a: "SOAP Fault includes faultcode, faultstring, (detail), and node/role fields depending on SOAP version."
  },
  {
    id: "soap-i-19",
    level: "Intermediate",
    q: "How do you map SOAP faults to custom exceptions?",
    a: "In server side, throw mapped faults; in clients, handle SOAPFaultException or framework-specific fault mapping."
  },
  {
    id: "soap-i-20",
    level: "Intermediate",
    q: "How do you add custom headers in SOAP request?",
    a: "Use handlers (JAX-WS) or interceptors (CXF) to add custom SOAP header elements."
  },

  /* =====================================================
     ADVANCED – 10 QUESTIONS
  ===================================================== */
  {
    id: "soap-a-01",
    level: "Advanced",
    q: "How does WS-Security signing and encryption work?",
    a: "Signing ensures integrity and authenticity; encryption ensures confidentiality. Often uses X.509 certificates with XML Signature/Encryption."
  },
  {
    id: "soap-a-02",
    level: "Advanced",
    q: "What is WS-ReliableMessaging?",
    a: "A standard to ensure message delivery reliability (sequence, acknowledgements, retries) across unreliable networks."
  },
  {
    id: "soap-a-03",
    level: "Advanced",
    q: "How do you implement idempotency in SOAP services?",
    a: "Use a unique requestId/correlationId in header, store processed IDs and return same response for duplicates."
  },
  {
    id: "soap-a-04",
    level: "Advanced",
    q: "How do you design SOAP services for backward compatibility?",
    a: "Avoid removing/renaming fields, add optional fields, use new namespaces/WSDL version for breaking changes."
  },
  {
    id: "soap-a-05",
    level: "Advanced",
    q: "How do you secure SOAP at transport vs message level?",
    a: "Transport security uses HTTPS (TLS). Message security uses WS-Security signatures/encryption, survives intermediaries."
  },
  {
    id: "soap-a-06",
    level: "Advanced",
    q: "How do you implement SOAP with certificate-based authentication?",
    a: "Use mutual TLS (mTLS) at transport, and optionally WS-Security with X.509 token at message level."
  },
  {
    id: "soap-a-07",
    level: "Advanced",
    q: "How does SOAP perform compared to REST and how to optimize it?",
    a: "SOAP is heavier due to XML. Optimize by enabling compression (gzip), MTOM for binaries, and avoiding large payloads."
  },
  {
    id: "soap-a-08",
    level: "Advanced",
    q: "How do you handle large payloads in SOAP services?",
    a: "Use streaming (StAX), MTOM attachments, server limits, chunked encoding, and avoid loading full XML into memory."
  },
  {
    id: "soap-a-09",
    level: "Advanced",
    q: "How do you trace SOAP requests end-to-end in microservices?",
    a: "Add correlation ID in SOAP headers, log it everywhere, propagate it to downstream calls and monitoring tools."
  },
  {
    id: "soap-a-10",
    level: "Advanced",
    q: "Provide a CXF interceptor example to log and add correlation ID header.",
    a: "Use an inbound/outbound interceptor to inject and log a correlationId.",
    answer: {
      summary: "CXF OutInterceptor to add a custom SOAP header.",
      codeTitle: "Apache CXF Interceptor",
      code: `public class CorrelationIdOutInterceptor extends AbstractPhaseInterceptor<SoapMessage> {
  public CorrelationIdOutInterceptor() {
    super(Phase.PREPARE_SEND);
  }

  @Override
  public void handleMessage(SoapMessage message) {
    String cid = UUID.randomUUID().toString();

    SoapHeader header = new SoapHeader(
      new QName("http://example.com/headers", "correlationId"),
      cid,
      new JAXBDataBinding(String.class)
    );

    message.getHeaders().add(header);
  }
}`
    }
  }
];
