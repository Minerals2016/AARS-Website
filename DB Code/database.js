function scan() {
    /*global variables*/
    var selector = document.getElementById("identification-select");

    var s_name = document.getElementById("_name");
    var s_id = document.getElementById("_id");
    var s_grade = document.getElementById("_grade");
    var s_status = document.getElementById("_status");
    var s_time = document.getElementById("_time");
    var s_comments = document.getElementById("_comments");

    var p_name = document.getElementById("_name");
    var p_id = document.getElementById("_id");
    var p_grade = document.getElementById("_grade");
    var p_status = document.getElementById("_status");
    var p_time = document.getElementById("_time");
    var p_comments = document.getElementById("_comments");

    var k_name = document.getElementById("_name");
    var k_id = document.getElementById("_id");
    var k_grade = document.getElementById("_grade");
    var k_status = document.getElementById("_status");
    var k_time = document.getElementById("_time");
    var k_comments = document.getElementById("_comments");

    var j_name = document.getElementById("_name");
    var j_id = document.getElementById("_id");
    var j_grade = document.getElementById("_grade");
    var j_status = document.getElementById("_status");
    var j_time = document.getElementById("_time");
    var j_comments = document.getElementById("_comments");

    var t_name = document.getElementById("_name");
    var t_id = document.getElementById("_id");
    var t_grade = document.getElementById("_grade");
    var t_status = document.getElementById("_status");
    var t_time = document.getElementById("_time");
    var t_comments = document.getElementById("_comments");

    schedule_start = [745, 837, 929, 1021, 1112, "1158", 1250, 1342];
    schedule_end = [832, 924, 1016, 1112, 1153, 1245, 1337, 1430];
    ids = [66236, 63563, 15433, 15134];
    var timestamp;
    
    surabhi_schedule = [false, false, false, false, false, true, true, false] /*present */
    phoenix_schedule = [false, false, false, false, false, true, true, false] /*late*/
    kevin_schedule = [false, false, false, false, false, false, false, false] /*absent*/
    jimmy_schedule = [false, false, false, false, false, false, true, false] /*wrong*/
    student_schedule = [false, false, false, false, false, false, false, false] /*doesn't belong here*/



    /*time counter*/
    function current() {
        var m_time = new Date();
        var hrs = m_time.getHours();
        var mins = m_time.getMinutes();
        var untimed = hrs + mins 
        var time = hrs + ":" + mins;
        untimed2 = time.replace(":", "");
        timestamp = parseInt(untimed2);
      }
    current();
    

      
    
    table.style.color = "green";
    if(selector.value == 66236) {
        alert("hello there");
    }
    else if(selector.value == 63563) {
        alert("nu");
    }
    
    

}