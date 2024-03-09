const sonarqubeScanner = require('sonarqube-scanner');
    sonarqubeScanner({
      serverUrl: 'http://localhost:9000',
      options : {
      'sonar.sources': '.',

          sonar.projectKey=venkateshangular
sonar.projectName=venkateshangular
sonar.projectVersion=1.0.0
sonar.projectDescription=Static analysis for the AppName
sonar.sources=www
sonar.exclusions=**/node_modules/**,**/*.spec.ts,**/dist/**,**/docs/**,**/*.js,**/coverage/**
sonar.tests=www 
sonar.test.inclusions=**/*.spec.ts
sonar.ts.tslint.configPath=tslint.json
      'sonar.inclusions' : 'packages/core/src/**' // Entry point of your code
      }
    }, () => {});
