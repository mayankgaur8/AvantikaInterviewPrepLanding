export const ANGULAR_QUESTIONS = [

/* =====================================================
   BASIC (20)
===================================================== */

{
  id: "ng-b-01",
  level: "Basic",
  q: "What is Angular?",
  a: "Angular is a TypeScript-based front-end framework developed by Google for building single-page applications (SPAs)."
},

{
  id: "ng-b-02",
  level: "Basic",
  q: "What are the main building blocks of Angular?",
  a: "Modules, Components, Templates, Directives, Services, and Dependency Injection."
},

{
  id: "ng-b-03",
  level: "Basic",
  q: "What is a component?",
  a: "A component controls a part of the UI using a template, logic, and styles."
},

{
  id: "ng-b-04",
  level: "Basic",
  q: "Component example?",
  answer: {
    summary: "Basic Angular component structure.",
    code: `@Component({
  selector: 'app-hello',
  template: '<h1>Hello Angular</h1>'
})
export class HelloComponent {}`
  }
},

{
  id: "ng-b-05",
  level: "Basic",
  q: "What is a module?",
  a: "A module groups related components, directives, pipes, and services."
},

{
  id: "ng-b-06",
  level: "Basic",
  q: "What is NgModule?",
  a: "NgModule is a decorator that defines metadata for Angular modules."
},

{
  id: "ng-b-07",
  level: "Basic",
  q: "What is data binding?",
  answer: {
    summary: "Angular supports different types of data binding.",
    table: {
      title: "Angular Data Binding",
      headers: ["Type", "Syntax", "Description"],
      rows: [
        ["Interpolation", "{{ value }}", "Component → View"],
        ["Property", "[value]", "Component → View"],
        ["Event", "(click)", "View → Component"],
        ["Two-way", "[(ngModel)]", "Both directions"]
      ]
    }
  }
},

{
  id: "ng-b-08",
  level: "Basic",
  q: "What is interpolation?",
  a: "Interpolation displays component data in the template using {{ }}."
},

{
  id: "ng-b-09",
  level: "Basic",
  q: "What are directives?",
  a: "Directives modify DOM behavior or appearance."
},

{
  id: "ng-b-10",
  level: "Basic",
  q: "Types of directives?",
  answer: {
    summary: "Angular has three directive types.",
    table: {
      title: "Directive Types",
      headers: ["Type", "Example"],
      rows: [
        ["Component", "@Component"],
        ["Structural", "*ngIf, *ngFor"],
        ["Attribute", "ngClass, ngStyle"]
      ]
    }
  }
},

{
  id: "ng-b-11",
  level: "Basic",
  q: "What is *ngIf?",
  a: "Structural directive that conditionally renders elements."
},

{
  id: "ng-b-12",
  level: "Basic",
  q: "*ngFor example?",
  answer: {
    summary: "Looping over list.",
    code: `<li *ngFor="let item of items">{{ item }}</li>`
  }
},

{
  id: "ng-b-13",
  level: "Basic",
  q: "What is a service?",
  a: "A reusable class that holds business logic and data."
},

{
  id: "ng-b-14",
  level: "Basic",
  q: "What is dependency injection?",
  a: "DI supplies dependencies to a class instead of creating them manually."
},

{
  id: "ng-b-15",
  level: "Basic",
  q: "What is CLI?",
  a: "Angular CLI is a command-line tool to scaffold and manage Angular apps."
},

{
  id: "ng-b-16",
  level: "Basic",
  q: "What is router?",
  a: "Angular Router enables navigation between views."
},

{
  id: "ng-b-17",
  level: "Basic",
  q: "Routing example?",
  answer: {
    summary: "Basic routing configuration.",
    code: `const routes: Routes = [
  { path: 'home', component: HomeComponent }
];`
  }
},

{
  id: "ng-b-18",
  level: "Basic",
  q: "What is ngModel?",
  a: "Directive used for two-way data binding in forms."
},

{
  id: "ng-b-19",
  level: "Basic",
  q: "What is SPA?",
  a: "Single Page Application loads a single HTML page and updates content dynamically."
},

{
  id: "ng-b-20",
  level: "Basic",
  q: "What is TypeScript?",
  a: "Superset of JavaScript adding static typing and OOP features."
},

/* =====================================================
   INTERMEDIATE (20)
===================================================== */

{
  id: "ng-i-01",
  level: "Intermediate",
  q: "Difference between template-driven and reactive forms?",
  answer: {
    summary: "Two Angular form approaches.",
    table: {
      title: "Forms Comparison",
      headers: ["Aspect", "Template-driven", "Reactive"],
      rows: [
        ["Setup", "HTML based", "Code based"],
        ["Scalability", "Low", "High"],
        ["Testing", "Harder", "Easier"]
      ]
    }
  }
},

{
  id: "ng-i-02",
  level: "Intermediate",
  q: "Reactive form example?",
  answer: {
    summary: "Reactive form setup.",
    code: `this.form = this.fb.group({
  name: ['', Validators.required]
});`
  }
},

{
  id: "ng-i-03",
  level: "Intermediate",
  q: "What is RxJS?",
  a: "Library for reactive programming using Observables."
},

{
  id: "ng-i-04",
  level: "Intermediate",
  q: "Observable vs Promise?",
  answer: {
    summary: "Key differences.",
    table: {
      title: "Observable vs Promise",
      headers: ["Aspect", "Observable", "Promise"],
      rows: [
        ["Values", "Multiple", "Single"],
        ["Lazy", "Yes", "No"],
        ["Cancellation", "Yes", "No"]
      ]
    }
  }
},

{
  id: "ng-i-05",
  level: "Intermediate",
  q: "What is HttpClient?",
  a: "Service for making HTTP calls."
},

{
  id: "ng-i-06",
  level: "Intermediate",
  q: "HttpClient example?",
  answer: {
    summary: "GET request example.",
    code: `this.http.get('/api/users').subscribe();`
  }
},

{
  id: "ng-i-07",
  level: "Intermediate",
  q: "What is interceptor?",
  a: "Intercepts HTTP requests/responses globally."
},

{
  id: "ng-i-08",
  level: "Intermediate",
  q: "Interceptor example?",
  answer: {
    summary: "Adding auth header.",
    code: `intercept(req, next) {
  return next.handle(req.clone({
    setHeaders: { Authorization: 'Bearer token' }
  }));
}`
  }
},

{
  id: "ng-i-09",
  level: "Intermediate",
  q: "What is lazy loading?",
  a: "Loads modules on demand to improve performance."
},

{
  id: "ng-i-10",
  level: "Intermediate",
  q: "Lazy loading route example?",
  answer: {
    summary: "Module lazy loading.",
    code: `{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }`
  }
},

{
  id: "ng-i-11",
  level: "Intermediate",
  q: "What is change detection?",
  a: "Process of syncing model and view."
},

{
  id: "ng-i-12",
  level: "Intermediate",
  q: "Default vs OnPush strategy?",
  a: "Default checks always; OnPush checks only on input/reference changes."
},

{
  id: "ng-i-13",
  level: "Intermediate",
  q: "What are pipes?",
  a: "Transform data in templates."
},

{
  id: "ng-i-14",
  level: "Intermediate",
  q: "Custom pipe example?",
  answer: {
    summary: "Uppercase pipe.",
    code: `@Pipe({name:'upper'})
export class UpperPipe implements PipeTransform {
  transform(v: string) { return v.toUpperCase(); }
}`
  }
},

{
  id: "ng-i-15",
  level: "Intermediate",
  q: "What is ViewChild?",
  a: "Accesses child component or DOM element."
},

{
  id: "ng-i-16",
  level: "Intermediate",
  q: "What is ContentChild?",
  a: "Access projected content."
},

{
  id: "ng-i-17",
  level: "Intermediate",
  q: "What is ng-content?",
  a: "Used for content projection."
},

{
  id: "ng-i-18",
  level: "Intermediate",
  q: "What is module federation?",
  a: "Micro-frontend technique for sharing modules."
},

{
  id: "ng-i-19",
  level: "Intermediate",
  q: "How do you handle errors in Angular?",
  a: "Global ErrorHandler, interceptors, RxJS catchError."
},

{
  id: "ng-i-20",
  level: "Intermediate",
  q: "What is AOT compilation?",
  a: "Ahead-of-Time compilation converts templates into JS during build."
},

/* =====================================================
   ADVANCED (10)
===================================================== */

{
  id: "ng-a-01",
  level: "Advanced",
  q: "Explain Angular Ivy.",
  a: "Ivy is Angular’s rendering engine with smaller bundles and faster compilation."
},

{
  id: "ng-a-02",
  level: "Advanced",
  q: "How does Angular optimize performance?",
  a: "Lazy loading, OnPush, trackBy, AOT, tree shaking."
},

{
  id: "ng-a-03",
  level: "Advanced",
  q: "What is Zone.js?",
  a: "Library that intercepts async operations to trigger change detection."
},

{
  id: "ng-a-04",
  level: "Advanced",
  q: "How do you build scalable Angular apps?",
  a: "Feature modules, shared modules, state management, strict typing."
},

{
  id: "ng-a-05",
  level: "Advanced",
  q: "NgRx vs Services?",
  answer: {
    summary: "State management comparison.",
    table: {
      title: "NgRx vs Services",
      headers: ["Aspect", "NgRx", "Service"],
      rows: [
        ["State", "Centralized", "Distributed"],
        ["Complexity", "High", "Low"],
        ["Best for", "Large apps", "Small apps"]
      ]
    }
  }
},

{
  id: "ng-a-06",
  level: "Advanced",
  q: "Explain ChangeDetectionRef.",
  a: "Manually triggers or detaches change detection."
},

{
  id: "ng-a-07",
  level: "Advanced",
  q: "What is SSR in Angular?",
  a: "Server-Side Rendering using Angular Universal."
},

{
  id: "ng-a-08",
  level: "Advanced",
  q: "SSR benefits?",
  a: "Improved SEO, faster first contentful paint."
},

{
  id: "ng-a-09",
  level: "Advanced",
  q: "How do you secure Angular apps?",
  a: "XSS prevention, HttpInterceptors, CSP, secure auth."
},

{
  id: "ng-a-10",
  level: "Advanced",
  q: "How do you test Angular applications?",
  a: "Jasmine/Karma for unit tests, Cypress/Playwright for e2e."
}

];
