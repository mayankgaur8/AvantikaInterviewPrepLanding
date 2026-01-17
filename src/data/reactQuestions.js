export const REACT_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "react-b-01",
  level: "Basic",
  q: "What is React?",
  a: "React is a JavaScript library for building reusable, component-based user interfaces."
},

{
  id: "react-b-02",
  level: "Basic",
  q: "What are components in React?",
  a: "Components are reusable UI building blocks. They can be functional or class-based."
},

{
  id: "react-b-03",
  level: "Basic",
  q: "What is JSX?",
  a: "JSX is a syntax extension that allows writing HTML-like code inside JavaScript."
},

{
  id: "react-b-04",
  level: "Basic",
  q: "JSX example?",
  answer: {
    summary: "JSX allows embedding expressions in UI.",
    code: `const element = <h1>Hello, React</h1>;`
  }
},

{
  id: "react-b-05",
  level: "Basic",
  q: "What is Virtual DOM?",
  a: "Virtual DOM is an in-memory representation of the real DOM used to optimize updates."
},

{
  id: "react-b-06",
  level: "Basic",
  q: "Difference between state and props?",
  answer: {
    summary: "State is mutable and local; props are immutable and passed from parent.",
    table: {
      title: "State vs Props",
      headers: ["Aspect", "State", "Props"],
      rows: [
        ["Mutability", "Mutable", "Immutable"],
        ["Ownership", "Component", "Parent"],
        ["Usage", "Internal data", "Configuration"]
      ]
    }
  }
},

{
  id: "react-b-07",
  level: "Basic",
  q: "What is useState hook?",
  a: "useState allows functional components to manage state."
},

{
  id: "react-b-08",
  level: "Basic",
  q: "useState example?",
  answer: {
    summary: "State management in function component.",
    code: `const [count, setCount] = useState(0);`
  }
},

{
  id: "react-b-09",
  level: "Basic",
  q: "What is useEffect?",
  a: "useEffect handles side effects like API calls, subscriptions, and timers."
},

{
  id: "react-b-10",
  level: "Basic",
  q: "useEffect example?",
  answer: {
    summary: "Runs after render.",
    code: `useEffect(() => {
  fetchData();
}, []);`
  }
},

{
  id: "react-b-11",
  level: "Basic",
  q: "What are hooks?",
  a: "Hooks are functions that let you use React features without classes."
},

{
  id: "react-b-12",
  level: "Basic",
  q: "What is conditional rendering?",
  a: "Rendering UI based on conditions using if/ternary/&& operators."
},

{
  id: "react-b-13",
  level: "Basic",
  q: "What is key in React lists?",
  a: "Key uniquely identifies elements to optimize reconciliation."
},

{
  id: "react-b-14",
  level: "Basic",
  q: "Why keys should be stable?",
  a: "Unstable keys cause unnecessary re-renders and bugs."
},

{
  id: "react-b-15",
  level: "Basic",
  q: "What is fragment?",
  a: "Fragments allow grouping elements without extra DOM nodes."
},

{
  id: "react-b-16",
  level: "Basic",
  q: "Fragment example?",
  answer: {
    summary: "Avoids wrapper div.",
    code: `<>
  <h1>Title</h1>
  <p>Text</p>
</>`
  }
},

{
  id: "react-b-17",
  level: "Basic",
  q: "What is lifting state up?",
  a: "Moving state to a common parent to share between components."
},

{
  id: "react-b-18",
  level: "Basic",
  q: "What is controlled component?",
  a: "Form element whose value is controlled by React state."
},

{
  id: "react-b-19",
  level: "Basic",
  q: "What is unidirectional data flow?",
  a: "Data flows from parent to child via props."
},

{
  id: "react-b-20",
  level: "Basic",
  q: "What is React.StrictMode?",
  a: "Development-only tool to detect potential problems."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "react-i-01",
  level: "Intermediate",
  q: "Difference between useEffect and useLayoutEffect?",
  a: "useEffect runs after paint; useLayoutEffect runs synchronously before paint."
},

{
  id: "react-i-02",
  level: "Intermediate",
  q: "What is memoization in React?",
  a: "Caching results to avoid unnecessary re-computation."
},

{
  id: "react-i-03",
  level: "Intermediate",
  q: "useMemo example?",
  answer: {
    summary: "Optimizes expensive calculations.",
    code: `const value = useMemo(() => compute(a), [a]);`
  }
},

{
  id: "react-i-04",
  level: "Intermediate",
  q: "useCallback vs useMemo?",
  answer: {
    summary: "useCallback memoizes functions; useMemo memoizes values.",
    table: {
      title: "useCallback vs useMemo",
      headers: ["Hook", "Returns", "Use Case"],
      rows: [
        ["useCallback", "Function", "Prevent function recreation"],
        ["useMemo", "Value", "Optimize calculations"]
      ]
    }
  }
},

{
  id: "react-i-05",
  level: "Intermediate",
  q: "What is React Context?",
  a: "Context provides global data without prop drilling."
},

{
  id: "react-i-06",
  level: "Intermediate",
  q: "Context example?",
  answer: {
    summary: "Global theme access.",
    code: `const ThemeContext = createContext("light");`
  }
},

{
  id: "react-i-07",
  level: "Intermediate",
  q: "What is prop drilling?",
  a: "Passing props through multiple layers unnecessarily."
},

{
  id: "react-i-08",
  level: "Intermediate",
  q: "How to avoid prop drilling?",
  a: "Use Context, Redux, or component composition."
},

{
  id: "react-i-09",
  level: "Intermediate",
  q: "What is reconciliation?",
  a: "React compares Virtual DOM trees to update minimal changes."
},

{
  id: "react-i-10",
  level: "Intermediate",
  q: "What is lazy loading?",
  a: "Loading components on demand using React.lazy."
},

{
  id: "react-i-11",
  level: "Intermediate",
  q: "Lazy loading example?",
  answer: {
    summary: "Improve initial load time.",
    code: `const Page = React.lazy(() => import("./Page"));`
  }
},

{
  id: "react-i-12",
  level: "Intermediate",
  q: "What is Error Boundary?",
  a: "Component that catches runtime errors in children."
},

{
  id: "react-i-13",
  level: "Intermediate",
  q: "Error boundary limitation?",
  a: "Cannot catch errors inside event handlers."
},

{
  id: "react-i-14",
  level: "Intermediate",
  q: "What is HOC?",
  a: "Higher-Order Component is a function that wraps another component."
},

{
  id: "react-i-15",
  level: "Intermediate",
  q: "HOC example?",
  answer: {
    summary: "Adds extra behavior.",
    code: `const withAuth = (Comp) => (props) => <Comp {...props} />;`
  }
},

{
  id: "react-i-16",
  level: "Intermediate",
  q: "What is controlled vs uncontrolled input?",
  a: "Controlled uses state; uncontrolled uses refs."
},

{
  id: "react-i-17",
  level: "Intermediate",
  q: "What is useRef?",
  a: "Access DOM elements or persist values without re-render."
},

{
  id: "react-i-18",
  level: "Intermediate",
  q: "What is synthetic event?",
  a: "Cross-browser wrapper around native browser events."
},

{
  id: "react-i-19",
  level: "Intermediate",
  q: "How does React batch updates?",
  a: "Groups multiple state updates into a single render."
},

{
  id: "react-i-20",
  level: "Intermediate",
  q: "What is hydration?",
  a: "Attaching React to server-rendered HTML."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "react-a-01",
  level: "Advanced",
  q: "How does React Fiber work?",
  a: "Fiber enables incremental rendering, prioritization, and interruption."
},

{
  id: "react-a-02",
  level: "Advanced",
  q: "Explain concurrent rendering.",
  a: "Allows React to prepare multiple UI versions and switch efficiently."
},

{
  id: "react-a-03",
  level: "Advanced",
  q: "What are React Server Components?",
  a: "Components rendered on server without sending JS to client."
},

{
  id: "react-a-04",
  level: "Advanced",
  q: "Difference between CSR and SSR?",
  answer: {
    summary: "CSR renders in browser; SSR renders on server.",
    table: {
      title: "CSR vs SSR",
      headers: ["Aspect", "CSR", "SSR"],
      rows: [
        ["SEO", "Poor", "Good"],
        ["Initial Load", "Slower", "Faster"],
        ["Server Load", "Low", "High"]
      ]
    }
  }
},

{
  id: "react-a-05",
  level: "Advanced",
  q: "How does React optimize re-renders?",
  a: "Memoization, keys, batching, and diffing algorithm."
},

{
  id: "react-a-06",
  level: "Advanced",
  q: "Explain state immutability.",
  a: "State should never be mutated directly to ensure predictable renders."
},

{
  id: "react-a-07",
  level: "Advanced",
  q: "What is custom hook?",
  a: "Reusable hook logic extracted into a function."
},

{
  id: "react-a-08",
  level: "Advanced",
  q: "Custom hook example?",
  answer: {
    summary: "Reusable data fetching logic.",
    code: `function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => fetch(url).then(r => r.json()).then(setData), [url]);
  return data;
}`
  }
},

{
  id: "react-a-09",
  level: "Advanced",
  q: "What is render prop pattern?",
  a: "Sharing logic using function as children."
},

{
  id: "react-a-10",
  level: "Advanced",
  q: "How do you secure React applications?",
  a: "XSS prevention, CSP headers, secure auth, environment variables."
}

];
