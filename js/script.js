
$(function() {
    var human = {
        name: 'Tim',
        age: 30,
        gender: 'man',
        height: 187,
        weight: 90
    }

    var worker = Object.create(human,{

        job: {value:''},
        salary: {value: 1000},
        work: function() {
            alert('work');
        }

    });  

    var student = Object.create(human,{

        institute: {value:''},
        grant: {value:500},
        watchSerials: function() {
            alert('watch TV');
        }
    });

  



    var dude1 = worker;
    console.log(dude1.name);

    var dude2 = worker;
    console.log(dude2.height);

    var dude3 = worker;
    console.log(dude3.age);

    var dude4 = student;
    console.log(dude4.name);

    var dude5 = student;
    console.log(dude5.gender);

    var dude6 = student;
    console.log(dude6.weight);

});





