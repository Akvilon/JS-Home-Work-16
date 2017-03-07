
$(function() {
    var human = {
        name: 'Tim',
        age: 30,
        gender: 'man',
        height: 187,
        weight: 90
    }

    var worker = {
        job: '',
        salary: 1000,
        work: function() {
            alert('work');
        }
    }

    worker.__proto__ = human;
    

    var student = {
        institute: '',
        grant: 500,
        watchSerials: function() {
            alert('watch TV');
        }
    }

    student.__proto__ = human;



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





