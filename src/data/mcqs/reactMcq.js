// src/data/mcqs/reactMcq.js
// 50 React MCQs (Basic • Intermediate • Advanced)

export const REACT_MCQ = [

  // ================= BASIC (1–17) =================
  {
    id: "react-mcq-1",
    tag: "React • Basic",
    q: "What is React?",
    options: [
      "A database",
      "A JavaScript library for building UI",
      "A backend framework",
      "A programming language"
    ],
    answer: 1,
    explain: "React is a JavaScript library used to build user interfaces."
  },
  {
    id: "react-mcq-2",
    tag: "React • Basic",
    q: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: 1,
    explain: "React was developed by Facebook (Meta)."
  },
  {
    id: "react-mcq-3",
    tag: "React • Basic",
    q: "What is JSX?",
    options: [
      "Java XML",
      "A template engine",
      "JavaScript syntax extension",
      "React compiler"
    ],
    answer: 2,
    explain: "JSX is a syntax extension for JavaScript used in React."
  },
  {
    id: "react-mcq-4",
    tag: "React • Basic",
    q: "Which command creates a new React app?",
    options: [
      "npm new react",
      "npm create-react-app",
      "npx create-react-app",
      "react init"
    ],
    answer: 2,
    explain: "npx create-react-app is commonly used to bootstrap a React app."
  },
  {
    id: "react-mcq-5",
    tag: "React • Basic",
    q: "What is a component in React?",
    options: [
      "A CSS file",
      "Reusable UI block",
      "Database table",
      "API endpoint"
    ],
    answer: 1,
    explain: "Components are reusable building blocks of UI."
  },
  {
    id: "react-mcq-6",
    tag: "React • Basic",
    q: "Which is a valid React component?",
    options: [
      "function MyComp() {}",
      "class MyComp extends React.Component",
      "Both A and B",
      "None"
    ],
    answer: 2,
    explain: "React supports both functional and class components."
  },
  {
    id: "react-mcq-7",
    tag: "React • Basic",
    q: "How do you pass data to a component?",
    options: ["state", "props", "context", "refs"],
    answer: 1,
    explain: "Props are used to pass data to components."
  },
  {
    id: "react-mcq-8",
    tag: "React • Basic",
    q: "What hook is used to manage state?",
    options: ["useEffect", "useContext", "useState", "useMemo"],
    answer: 2,
    explain: "useState manages component state."
  },
  {
    id: "react-mcq-9",
    tag: "React • Basic",
    q: "Which hook handles side effects?",
    options: ["useRef", "useEffect", "useState", "useCallback"],
    answer: 1,
    explain: "useEffect is used for side effects."
  },
  {
    id: "react-mcq-10",
    tag: "React • Basic",
    q: "React uses which data flow?",
    options: ["Two-way", "One-way", "Circular", "Random"],
    answer: 1,
    explain: "React follows one-way data flow."
  },
  {
    id: "react-mcq-11",
    tag: "React • Basic",
    q: "What is Virtual DOM?",
    options: [
      "Actual browser DOM",
      "In-memory representation of DOM",
      "Database model",
      "Server DOM"
    ],
    answer: 1,
    explain: "Virtual DOM is an in-memory copy of the real DOM."
  },
  {
    id: "react-mcq-12",
    tag: "React • Basic",
    q: "Which attribute is used instead of class?",
    options: ["class", "className", "css", "style"],
    answer: 1,
    explain: "className is used instead of class in JSX."
  },
  {
    id: "react-mcq-13",
    tag: "React • Basic",
    q: "Which method renders UI?",
    options: ["render()", "return()", "display()", "draw()"],
    answer: 0,
    explain: "render() method returns JSX in class components."
  },
  {
    id: "react-mcq-14",
    tag: "React • Basic",
    q: "How many root elements can JSX return?",
    options: ["1", "2", "Unlimited", "Depends"],
    answer: 0,
    explain: "JSX must return a single root element."
  },
  {
    id: "react-mcq-15",
    tag: "React • Basic",
    q: "What is Fragment?",
    options: [
      "Wrapper without extra DOM",
      "Special component",
      "CSS helper",
      "Hook"
    ],
    answer: 0,
    explain: "Fragments group elements without extra DOM nodes."
  },
  {
    id: "react-mcq-16",
    tag: "React • Basic",
    q: "Which hook stores mutable value?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: 2,
    explain: "useRef stores mutable values."
  },
  {
    id: "react-mcq-17",
    tag: "React • Basic",
    q: "What is default export?",
    options: [
      "Only one export allowed",
      "Multiple exports",
      "Named export",
      "Invalid syntax"
    ],
    answer: 0,
    explain: "A module can have only one default export."
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "react-mcq-18",
    tag: "React • Intermediate",
    q: "What is lifting state up?",
    options: [
      "Removing state",
      "Moving state to parent",
      "Copying state",
      "Using Redux"
    ],
    answer: 1,
    explain: "Lifting state up moves shared state to a common parent."
  },
  {
    id: "react-mcq-19",
    tag: "React • Intermediate",
    q: "What is controlled component?",
    options: [
      "Uses DOM directly",
      "State-controlled form input",
      "Stateless component",
      "Class component"
    ],
    answer: 1,
    explain: "Controlled components use React state to control inputs."
  },
  {
    id: "react-mcq-20",
    tag: "React • Intermediate",
    q: "What does key prop do?",
    options: [
      "Styling",
      "Uniquely identify list items",
      "Event handling",
      "State update"
    ],
    answer: 1,
    explain: "key helps React identify elements during reconciliation."
  },
  {
    id: "react-mcq-21",
    tag: "React • Intermediate",
    q: "What is useMemo used for?",
    options: [
      "API calls",
      "Memoizing values",
      "Routing",
      "State management"
    ],
    answer: 1,
    explain: "useMemo memoizes expensive computations."
  },
  {
    id: "react-mcq-22",
    tag: "React • Intermediate",
    q: "What is useCallback?",
    options: [
      "Memoized function",
      "Side effect hook",
      "State hook",
      "Context hook"
    ],
    answer: 0,
    explain: "useCallback memoizes functions."
  },
  {
    id: "react-mcq-23",
    tag: "React • Intermediate",
    q: "What is Context API?",
    options: [
      "State management tool",
      "Alternative to props drilling",
      "Routing system",
      "CSS framework"
    ],
    answer: 1,
    explain: "Context API avoids deep prop drilling."
  },
  {
    id: "react-mcq-24",
    tag: "React • Intermediate",
    q: "Which hook consumes context?",
    options: ["useContext", "useState", "useEffect", "useReducer"],
    answer: 0,
    explain: "useContext consumes context values."
  },
  {
    id: "react-mcq-25",
    tag: "React • Intermediate",
    q: "What is useReducer?",
    options: [
      "Alternative to useState",
      "API hook",
      "Lifecycle hook",
      "Routing hook"
    ],
    answer: 0,
    explain: "useReducer is useful for complex state logic."
  },
  {
    id: "react-mcq-26",
    tag: "React • Intermediate",
    q: "What is reconciliation?",
    options: [
      "Comparing Virtual DOM",
      "State update",
      "API sync",
      "Rendering"
    ],
    answer: 0,
    explain: "Reconciliation compares old and new Virtual DOM."
  },
  {
    id: "react-mcq-27",
    tag: "React • Intermediate",
    q: "What is React.memo?",
    options: [
      "Hook",
      "HOC for memoization",
      "State manager",
      "Router"
    ],
    answer: 1,
    explain: "React.memo prevents unnecessary re-renders."
  },
  {
    id: "react-mcq-28",
    tag: "React • Intermediate",
    q: "What is prop drilling?",
    options: [
      "Passing props deeply",
      "Removing props",
      "Validating props",
      "Updating props"
    ],
    answer: 0,
    explain: "Prop drilling means passing props through many levels."
  },
  {
    id: "react-mcq-29",
    tag: "React • Intermediate",
    q: "Which library handles routing?",
    options: ["Redux", "Axios", "React Router", "Formik"],
    answer: 2,
    explain: "React Router manages routing."
  },
  {
    id: "react-mcq-30",
    tag: "React • Intermediate",
    q: "What is lazy loading?",
    options: [
      "Loading components on demand",
      "Loading CSS",
      "Loading state",
      "Loading props"
    ],
    answer: 0,
    explain: "Lazy loading loads components only when needed."
  },
  {
    id: "react-mcq-31",
    tag: "React • Intermediate",
    q: "Which function loads lazy component?",
    options: ["lazy()", "import()", "load()", "require()"],
    answer: 0,
    explain: "React.lazy() loads components lazily."
  },
  {
    id: "react-mcq-32",
    tag: "React • Intermediate",
    q: "What is Suspense?",
    options: [
      "Error handling",
      "Fallback UI for lazy",
      "State hook",
      "Context provider"
    ],
    answer: 1,
    explain: "Suspense shows fallback while loading."
  },
  {
    id: "react-mcq-33",
    tag: "React • Intermediate",
    q: "What is custom hook?",
    options: [
      "Built-in hook",
      "Reusable hook logic",
      "Library hook",
      "Private hook"
    ],
    answer: 1,
    explain: "Custom hooks reuse stateful logic."
  },
  {
    id: "react-mcq-34",
    tag: "React • Intermediate",
    q: "What is useEffect dependency array?",
    options: [
      "Controls execution",
      "Defines props",
      "Stores state",
      "Handles routing"
    ],
    answer: 0,
    explain: "Dependency array controls when effect runs."
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "react-mcq-35",
    tag: "React • Advanced",
    q: "What is Concurrent Mode?",
    options: [
      "Parallel rendering",
      "Blocking rendering",
      "Legacy rendering",
      "Server rendering"
    ],
    answer: 0,
    explain: "Concurrent Mode enables interruptible rendering."
  },
  {
    id: "react-mcq-36",
    tag: "React • Advanced",
    q: "What is Server-Side Rendering?",
    options: [
      "Rendering on client",
      "Rendering on server",
      "Static rendering",
      "Hydration"
    ],
    answer: 1,
    explain: "SSR renders React on server for faster load."
  },
  {
    id: "react-mcq-37",
    tag: "React • Advanced",
    q: "Which framework supports SSR?",
    options: ["Vite", "Next.js", "CRA", "Webpack"],
    answer: 1,
    explain: "Next.js supports SSR."
  },
  {
    id: "react-mcq-38",
    tag: "React • Advanced",
    q: "What is hydration?",
    options: [
      "Server HTML activation",
      "CSS loading",
      "State cleanup",
      "Memory optimization"
    ],
    answer: 0,
    explain: "Hydration attaches event handlers to server HTML."
  },
  {
    id: "react-mcq-39",
    tag: "React • Advanced",
    q: "What is Fiber?",
    options: [
      "React engine",
      "Rendering algorithm",
      "DOM library",
      "CSS framework"
    ],
    answer: 1,
    explain: "Fiber is React’s reconciliation algorithm."
  },
  {
    id: "react-mcq-40",
    tag: "React • Advanced",
    q: "What is batching?",
    options: [
      "Combining updates",
      "Splitting updates",
      "Delaying render",
      "Caching data"
    ],
    answer: 0,
    explain: "Batching groups state updates for performance."
  },
  {
    id: "react-mcq-41",
    tag: "React • Advanced",
    q: "What is strict mode?",
    options: [
      "Production mode",
      "Development helper",
      "Security feature",
      "Rendering mode"
    ],
    answer: 1,
    explain: "StrictMode helps identify potential problems."
  },
  {
    id: "react-mcq-42",
    tag: "React • Advanced",
    q: "Which hook replaces componentDidCatch?",
    options: ["useEffect", "ErrorBoundary", "useError", "useCatch"],
    answer: 1,
    explain: "Error Boundaries catch rendering errors."
  },
  {
    id: "react-mcq-43",
    tag: "React • Advanced",
    q: "What is reconciliation cost reduced by?",
    options: ["Keys", "Refs", "Memo", "All"],
    answer: 3,
    explain: "Keys, memoization reduce reconciliation cost."
  },
  {
    id: "react-mcq-44",
    tag: "React • Advanced",
    q: "What is code splitting?",
    options: [
      "Splitting JS bundles",
      "Splitting components",
      "Splitting CSS",
      "Splitting state"
    ],
    answer: 0,
    explain: "Code splitting reduces initial bundle size."
  },
  {
    id: "react-mcq-45",
    tag: "React • Advanced",
    q: "What is useTransition?",
    options: [
      "Low-priority updates",
      "Navigation hook",
      "Animation hook",
      "Context hook"
    ],
    answer: 0,
    explain: "useTransition manages low-priority updates."
  },
  {
    id: "react-mcq-46",
    tag: "React • Advanced",
    q: "What is useDeferredValue?",
    options: [
      "Delay state updates",
      "Cache data",
      "Prevent renders",
      "Batch updates"
    ],
    answer: 0,
    explain: "useDeferredValue defers expensive renders."
  },
  {
    id: "react-mcq-47",
    tag: "React • Advanced",
    q: "What is portal?",
    options: [
      "Render outside DOM hierarchy",
      "Routing",
      "State container",
      "Context provider"
    ],
    answer: 0,
    explain: "Portals render children outside DOM hierarchy."
  },
  {
    id: "react-mcq-48",
    tag: "React • Advanced",
    q: "What is uncontrolled component?",
    options: [
      "Uses refs",
      "Uses state",
      "Uses props",
      "Uses context"
    ],
    answer: 0,
    explain: "Uncontrolled components rely on refs."
  },
  {
    id: "react-mcq-49",
    tag: "React • Advanced",
    q: "What is render prop?",
    options: [
      "Function as child",
      "Lifecycle method",
      "Hook",
      "Context"
    ],
    answer: 0,
    explain: "Render props use function as a child."
  },
  {
    id: "react-mcq-50",
    tag: "React • Advanced",
    q: "Best optimization technique?",
    options: [
      "Memoization",
      "Lazy loading",
      "Code splitting",
      "All of these"
    ],
    answer: 3,
    explain: "All techniques improve performance."
  }
];
