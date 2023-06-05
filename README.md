# ListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Characteristics

The application is based on a list of tasks with different statuses, priority and creation dates where it obtains the tasks from a service through observables.
It is allowed to edit the description of each one, save it and also delete it if necessary.

## Code scaffolding

ListApp/
  src/
    app/
      material/
          material.module.ts
      task/
          components/
            chip-status/
            confirmation-dialog/
            task-details/
            task-list/
          models/
            Itask.ts
          services/
            task.service.ts
          views/
            task/          
         tasks.module.ts
         tasks-routing.ts
      services/
        task.service.ts
      models/
        task.model.ts
      app.component.ts
      app.component.html
      app.component.scss
      app.module.ts
    assets/
    index.html
    styles.scss
    
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
