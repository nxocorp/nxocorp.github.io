'use strict';

angular.module('demoApp', [])

    .controller('ProfListController', function() {
        var profList = this;
        profList.profiles = [
          {name:'NXOCORP', pid:'U0001'},
          {name:'VECKY', pid:'U0002'}
        ];
    })
    .controller('MessListController', function() { 
        var messList = this;
        messList.messages = [
          { title: 'Welcome to NXO-HQ Studio' 
          , content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.'
          , pid: 'M0001'}     
        ];
    })
    .controller('ObjeListController', function() { 
        var objeList = this;
        objeList.objects = [
          { title:'CODECANVAS'
          , desc: 'Semantic programming language' 
          , tags: [ 
              { name:'tag1', type: 'label-success' }
            , { name:'tag2', type: 'label-warning' }
            , { name:'tag3', type: 'label-danger'  }
            ]
          , pid:'O0001'},
          { title:'GRIDSPACE'
          , desc: 'Shared wireless peripheral devices' 
          , tags: {}
          , pid:'O0002'},
          { title:'CLOUDLINK'
          , desc: 'Portable secure cloud services' 
          , tags: {}
          , pid:'O0003'}
        ];
    })
    ;