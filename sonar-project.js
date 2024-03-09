const sonarqubeScanner = require('sonarqube-scanner');
    sonarqubeScanner({
      serverUrl: 'http://16.170.234.56:9000/',
      options : {
      'sonar.sources': '.',
        'sonar.projectKey' :'venkateshangular'
    'sonar.projectName' :'venkateshangular'
    'sonar.projectVersion': '1.0.0'
    'sonar.projectDescription':'This is Angular based Node js based App'
    'sonar.sources': www
    'sonar.login' :"admin"
    'sonar.password' : "admin"
    'sonar.langulage' : 'js'
      }
    }, () => {});
