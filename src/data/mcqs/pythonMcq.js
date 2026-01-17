// src/data/mcqs/pythonMcq.js
// 50 Python MCQs (Basic • Intermediate • Advanced)

export const PYTHON_MCQ = [

  // ================= BASIC (1–17) =================
  {
    id: "py-mcq-1",
    tag: "Python • Basic",
    q: "What type of language is Python?",
    options: ["Compiled", "Interpreted", "Machine-level", "Assembly"],
    answer: 1,
    explain: "Python is an interpreted language executed line by line."
  },
  {
    id: "py-mcq-2",
    tag: "Python • Basic",
    q: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: 2,
    explain: "`def` is used to define a function."
  },
  {
    id: "py-mcq-3",
    tag: "Python • Basic",
    q: "Which data type is immutable?",
    options: ["list", "dict", "set", "tuple"],
    answer: 3,
    explain: "Tuples are immutable; their contents cannot be changed."
  },
  {
    id: "py-mcq-4",
    tag: "Python • Basic",
    q: "What does `len()` do?",
    options: ["Counts functions", "Returns length", "Deletes items", "Sorts data"],
    answer: 1,
    explain: "`len()` returns the number of elements."
  },
  {
    id: "py-mcq-5",
    tag: "Python • Basic",
    q: "Which symbol is used for comments?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: 2,
    explain: "`#` starts a single-line comment."
  },
  {
    id: "py-mcq-6",
    tag: "Python • Basic",
    q: "Which collection does not allow duplicates?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: 3,
    explain: "Set does not allow duplicate values."
  },
  {
    id: "py-mcq-7",
    tag: "Python • Basic",
    q: "Which keyword is used to handle exceptions?",
    options: ["try", "catch", "handle", "error"],
    answer: 0,
    explain: "`try` is used with `except` to handle exceptions."
  },
  {
    id: "py-mcq-8",
    tag: "Python • Basic",
    q: "What is the output of `type(10)`?",
    options: ["str", "float", "int", "number"],
    answer: 2,
    explain: "10 is an integer."
  },
  {
    id: "py-mcq-9",
    tag: "Python • Basic",
    q: "Which operator is used for exponentiation?",
    options: ["^", "**", "//", "%"],
    answer: 1,
    explain: "`**` is exponentiation operator."
  },
  {
    id: "py-mcq-10",
    tag: "Python • Basic",
    q: "Which loop runs at least once?",
    options: ["for", "while", "do-while", "None"],
    answer: 3,
    explain: "Python has no do-while loop."
  },
  {
    id: "py-mcq-11",
    tag: "Python • Basic",
    q: "What does `input()` return?",
    options: ["int", "float", "string", "boolean"],
    answer: 2,
    explain: "`input()` always returns a string."
  },
  {
    id: "py-mcq-12",
    tag: "Python • Basic",
    q: "Which keyword is used to create a class?",
    options: ["class", "struct", "object", "define"],
    answer: 0,
    explain: "`class` defines a class."
  },
  {
    id: "py-mcq-13",
    tag: "Python • Basic",
    q: "Which function converts string to integer?",
    options: ["str()", "int()", "float()", "bool()"],
    answer: 1,
    explain: "`int()` converts to integer."
  },
  {
    id: "py-mcq-14",
    tag: "Python • Basic",
    q: "What does `break` do?",
    options: ["Stops program", "Skips iteration", "Exits loop", "Restarts loop"],
    answer: 2,
    explain: "`break` exits the loop."
  },
  {
    id: "py-mcq-15",
    tag: "Python • Basic",
    q: "Which module is used for regular expressions?",
    options: ["regex", "pyregex", "re", "match"],
    answer: 2,
    explain: "`re` module handles regular expressions."
  },
  {
    id: "py-mcq-16",
    tag: "Python • Basic",
    q: "What is PEP 8?",
    options: ["Compiler", "Style guide", "Interpreter", "Library"],
    answer: 1,
    explain: "PEP 8 defines Python coding standards."
  },
  {
    id: "py-mcq-17",
    tag: "Python • Basic",
    q: "Which file extension is used for Python files?",
    options: [".pyth", ".pt", ".py", ".p"],
    answer: 2,
    explain: "Python files use `.py` extension."
  },

  // ================= INTERMEDIATE (18–34) =================
  {
    id: "py-mcq-18",
    tag: "Python • Intermediate",
    q: "What is a lambda function?",
    options: [
      "Named function",
      "Anonymous function",
      "Class method",
      "Generator"
    ],
    answer: 1,
    explain: "Lambda functions are anonymous one-line functions."
  },
  {
    id: "py-mcq-19",
    tag: "Python • Intermediate",
    q: "What does `*args` represent?",
    options: [
      "Dictionary arguments",
      "Variable number of positional arguments",
      "Keyword arguments",
      "Mandatory arguments"
    ],
    answer: 1,
    explain: "`*args` captures variable positional arguments."
  },
  {
    id: "py-mcq-20",
    tag: "Python • Intermediate",
    q: "What is list comprehension?",
    options: [
      "Loop replacement",
      "Compact syntax for creating lists",
      "Sorting mechanism",
      "Memory optimization"
    ],
    answer: 1,
    explain: "List comprehension provides concise list creation."
  },
  {
    id: "py-mcq-21",
    tag: "Python • Intermediate",
    q: "What is the output of `bool([])`?",
    options: ["True", "False", "Error", "None"],
    answer: 1,
    explain: "Empty collections evaluate to False."
  },
  {
    id: "py-mcq-22",
    tag: "Python • Intermediate",
    q: "Which keyword is used to create generators?",
    options: ["yield", "return", "gen", "next"],
    answer: 0,
    explain: "`yield` creates generators."
  },
  {
    id: "py-mcq-23",
    tag: "Python • Intermediate",
    q: "What is a decorator?",
    options: [
      "Design pattern",
      "Function modifying another function",
      "Class inheritance",
      "Module import"
    ],
    answer: 1,
    explain: "Decorators modify function behavior without changing code."
  },
  {
    id: "py-mcq-24",
    tag: "Python • Intermediate",
    q: "Which statement is true about generators?",
    options: [
      "They store all values",
      "They generate values lazily",
      "They are faster than lists always",
      "They cannot be iterated"
    ],
    answer: 1,
    explain: "Generators produce values on demand."
  },
  {
    id: "py-mcq-25",
    tag: "Python • Intermediate",
    q: "What is the purpose of `__init__`?",
    options: [
      "Destructor",
      "Initializer",
      "Static method",
      "Private function"
    ],
    answer: 1,
    explain: "`__init__` initializes object state."
  },
  {
    id: "py-mcq-26",
    tag: "Python • Intermediate",
    q: "What does `is` operator compare?",
    options: ["Values", "Memory references", "Strings", "Types"],
    answer: 1,
    explain: "`is` compares object identity."
  },
  {
    id: "py-mcq-27",
    tag: "Python • Intermediate",
    q: "What is virtual environment?",
    options: [
      "Cloud server",
      "Isolated Python environment",
      "Docker image",
      "IDE"
    ],
    answer: 1,
    explain: "Virtual env isolates dependencies per project."
  },
  {
    id: "py-mcq-28",
    tag: "Python • Intermediate",
    q: "Which library is commonly used for HTTP requests?",
    options: ["urllib", "requests", "httpx", "All of these"],
    answer: 3,
    explain: "All can be used, `requests` is most popular."
  },
  {
    id: "py-mcq-29",
    tag: "Python • Intermediate",
    q: "What is `with` statement used for?",
    options: [
      "Loops",
      "Exception handling",
      "Context management",
      "Multithreading"
    ],
    answer: 2,
    explain: "`with` ensures proper resource management."
  },
  {
    id: "py-mcq-30",
    tag: "Python • Intermediate",
    q: "What is pickling?",
    options: [
      "Encrypting data",
      "Serializing objects",
      "Compressing files",
      "Caching results"
    ],
    answer: 1,
    explain: "Pickling serializes Python objects."
  },
  {
    id: "py-mcq-31",
    tag: "Python • Intermediate",
    q: "Which library is used for data analysis?",
    options: ["NumPy", "Pandas", "Matplotlib", "All"],
    answer: 3,
    explain: "All are used in data analysis."
  },
  {
    id: "py-mcq-32",
    tag: "Python • Intermediate",
    q: "What does GIL stand for?",
    options: [
      "Global Interpreter Lock",
      "General Instruction Loop",
      "Global Index List",
      "General Import Loader"
    ],
    answer: 0,
    explain: "GIL controls execution of threads in CPython."
  },
  {
    id: "py-mcq-33",
    tag: "Python • Intermediate",
    q: "Which module supports multithreading?",
    options: ["thread", "multiprocessing", "threading", "async"],
    answer: 2,
    explain: "`threading` module supports threads."
  },
  {
    id: "py-mcq-34",
    tag: "Python • Intermediate",
    q: "What is `__str__`?",
    options: [
      "Constructor",
      "String representation method",
      "Destructor",
      "Operator"
    ],
    answer: 1,
    explain: "`__str__` defines human-readable string output."
  },

  // ================= ADVANCED (35–50) =================
  {
    id: "py-mcq-35",
    tag: "Python • Advanced",
    q: "What is metaclass?",
    options: [
      "Class of a class",
      "Object of a function",
      "Type hint",
      "Decorator"
    ],
    answer: 0,
    explain: "Metaclass defines behavior of classes."
  },
  {
    id: "py-mcq-36",
    tag: "Python • Advanced",
    q: "Which keyword enables async programming?",
    options: ["await", "async", "yield", "Both async and await"],
    answer: 3,
    explain: "`async` and `await` enable asynchronous programming."
  },
  {
    id: "py-mcq-37",
    tag: "Python • Advanced",
    q: "What is asyncio used for?",
    options: [
      "Multithreading",
      "Asynchronous I/O",
      "CPU-bound tasks",
      "Memory management"
    ],
    answer: 1,
    explain: "asyncio is for async I/O operations."
  },
  {
    id: "py-mcq-38",
    tag: "Python • Advanced",
    q: "What is monkey patching?",
    options: [
      "Bug fixing",
      "Dynamic modification of classes/functions at runtime",
      "Testing framework",
      "Threading technique"
    ],
    answer: 1,
    explain: "Monkey patching changes code behavior at runtime."
  },
  {
    id: "py-mcq-39",
    tag: "Python • Advanced",
    q: "Which is true about Python memory management?",
    options: [
      "Manual allocation",
      "Uses garbage collection",
      "No reference counting",
      "Only stack memory"
    ],
    answer: 1,
    explain: "Python uses reference counting + garbage collection."
  },
  {
    id: "py-mcq-40",
    tag: "Python • Advanced",
    q: "What is `__slots__` used for?",
    options: [
      "Thread control",
      "Memory optimization",
      "Inheritance",
      "Serialization"
    ],
    answer: 1,
    explain: "`__slots__` reduces memory footprint of objects."
  },
  {
    id: "py-mcq-41",
    tag: "Python • Advanced",
    q: "What is tail recursion?",
    options: [
      "Recursive call at function end",
      "Infinite recursion",
      "Stack overflow",
      "Optimized recursion"
    ],
    answer: 0,
    explain: "Tail recursion calls itself as final operation."
  },
  {
    id: "py-mcq-42",
    tag: "Python • Advanced",
    q: "Does Python optimize tail recursion?",
    options: ["Yes", "No", "Sometimes", "Only in PyPy"],
    answer: 1,
    explain: "Python does NOT optimize tail recursion."
  },
  {
    id: "py-mcq-43",
    tag: "Python • Advanced",
    q: "What is C-extension?",
    options: [
      "Python library",
      "C code extending Python functionality",
      "Bytecode optimizer",
      "Interpreter"
    ],
    answer: 1,
    explain: "C-extensions enhance performance."
  },
  {
    id: "py-mcq-44",
    tag: "Python • Advanced",
    q: "What is `functools.lru_cache`?",
    options: [
      "Thread pool",
      "Memoization decorator",
      "Database cache",
      "Disk cache"
    ],
    answer: 1,
    explain: "Caches function results to improve performance."
  },
  {
    id: "py-mcq-45",
    tag: "Python • Advanced",
    q: "Which statement about GIL is correct?",
    options: [
      "Removes concurrency",
      "Limits CPU-bound threading",
      "Affects async",
      "Only affects multiprocessing"
    ],
    answer: 1,
    explain: "GIL limits CPU-bound multi-threading."
  },
  {
    id: "py-mcq-46",
    tag: "Python • Advanced",
    q: "Which is best for CPU-bound tasks?",
    options: ["threading", "asyncio", "multiprocessing", "event loop"],
    answer: 2,
    explain: "Multiprocessing bypasses GIL."
  },
  {
    id: "py-mcq-47",
    tag: "Python • Advanced",
    q: "What does `__enter__` and `__exit__` define?",
    options: [
      "Loop control",
      "Context manager",
      "Destructor",
      "Inheritance"
    ],
    answer: 1,
    explain: "They define context manager behavior."
  },
  {
    id: "py-mcq-48",
    tag: "Python • Advanced",
    q: "What is PyPy?",
    options: [
      "Python compiler",
      "Alternative Python interpreter with JIT",
      "Library manager",
      "Testing framework"
    ],
    answer: 1,
    explain: "PyPy is a JIT-based Python interpreter."
  },
  {
    id: "py-mcq-49",
    tag: "Python • Advanced",
    q: "What is bytecode?",
    options: [
      "Machine code",
      "Intermediate code executed by VM",
      "Assembly code",
      "Binary executable"
    ],
    answer: 1,
    explain: "Python compiles source to bytecode."
  },
  {
    id: "py-mcq-50",
    tag: "Python • Advanced",
    q: "Which file stores compiled Python bytecode?",
    options: [".py", ".class", ".pyo", ".pyc"],
    answer: 3,
    explain: "Compiled bytecode is stored in `.pyc` files."
  }
];
