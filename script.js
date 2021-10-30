/* TIMER
1. Find place in html where timer will live 
2. Make variables to select html 
3. Attach moment.js to html to be able to  use timer
4. make function that will have timer
5. change timer format*/

$(document).ready(function () {


    var currentDate = $("#time")
    var date = moment().format('dddd, MMMM Do, YYYY')
    currentDate.text(date)
    var currentTime = moment().hours()
    console.log(currentTime)

    /* Save Button Function
    1. make variable to select html save button 
    2. set prevent default
    3. make variable to select the id of the area that was clicked on
    4. save the value of the input field area to local storage
    5. show the saved items from local storage upon page render
    */
    var saveButton = $(".saveBtn")
    saveButton.on('click', function (event) {
        event.preventDefault()
        var timeBlockId = $(this).attr('id')
        var task = $(this).parent('.col-2').siblings('.col-9').children('.description').val()
        localStorage.setItem(timeBlockId, task)
        showTask()
    })

    showTask()
    function showTask() {
        for (var i = 9; i < 18; i++) {
            var task = localStorage.getItem(i)
            $('#' + i + "").text(task)
        }
    }



    /*  Auto change background color
    1. Make variable to access background of textarea
    2. Make variable to turn into specific time of color
    3. Get hour of the day
    4. add class depending on number of hour
    */

    setColor()
    function setColor() {
        var timeBlock = $('.description')
        timeBlock.each(function () {
            var hour = $(this).attr('id')
            if (currentTime > hour) {
                $(this).addClass('past')
            }
            else if (currentTime == hour) {
                $(this).remove('past')
                $(this).addClass('present')
            }
            else if (currentTime < hour) {
                $(this).remove('present')
                $(this).remove('past')
                $(this).addClass('future')
            }

        })

    }
})