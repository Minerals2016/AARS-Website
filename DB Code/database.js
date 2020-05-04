function scan() {
    /*global variables*/
    var selector = document.getElementById("identification-select");

    var s_name = document.getElementById("s_name");
    var s_id = document.getElementById("s_id");
    var s_grade = document.getElementById("s_grade");
    var s_status = document.getElementById("s_status");
    var s_time = document.getElementById("s_time");
    var s_comments = document.getElementById("s_comments");

    var p_name = document.getElementById("p_name");
    var p_id = document.getElementById("p_id");
    var p_grade = document.getElementById("p_grade");
    var p_status = document.getElementById("p_status");
    var p_time = document.getElementById("p_time");
    var p_comments = document.getElementById("p_comments");

    var k_name = document.getElementById("k_name");
    var k_id = document.getElementById("k_id");
    var k_grade = document.getElementById("k_grade");
    var k_status = document.getElementById("k_status");
    var k_time = document.getElementById("k_time");
    var k_comments = document.getElementById("k_comments");

    var j_name = document.getElementById("j_name");
    var j_id = document.getElementById("j_id");
    var j_grade = document.getElementById("j_grade");
    var j_status = document.getElementById("j_status");
    var j_time = document.getElementById("j_time");
    var j_comments = document.getElementById("j_comments");

    var t_name = document.getElementById("t_name");
    var t_id = document.getElementById("t_id");
    var t_grade = document.getElementById("t_grade");
    var t_status = document.getElementById("t_status");
    var t_time = document.getElementById("t_time");
    var t_comments = document.getElementById("t_comments");

    schedule_start = [745, 837, 929, 1021, 1112, 1158, 1250, 1342]; /*1158 */
    schedule_end = [832, 924, 1016, 1112, 1153, 1245, 1337, 1430];
    ids = [66236, 63563, 15433, 15134];
    var timestamp;
    var timestamp2;
    
    surabhi_schedule = [false, false, false, false, false, true, true, false]; /*present */
    phoenix_schedule = [false, false, false, false, false, true, true, false]; /*late*/
    kevin_schedule = [false, false, false, false, false, false, false, false]; /*absent*/
    jimmy_schedule = [false, false, false, false, false, false, true, false]; /*wrong*/
    student_schedule = [false, false, false, false, false, false, false, false]; /*doesn't belong here*/

    /*time counter*/
    function current() {
        var m_time = new Date();
        var hrs = m_time.getHours();
        var mins = m_time.getMinutes();
        var untimed = hrs + mins; 
        /*converts into 2 digits*/
        if(hrs >= 0 && hrs <= 9) {
            hrs = "0" + hrs;
            }
        if (mins >= 0 && mins <= 9) {
            mins = "0" + mins;
        }
        var time = hrs + ":" + mins;
        var untimed2 = time.replace(":", "");

        
        timestamp = parseInt(untimed2);
        timestamp2 = time;
    }
    current();

    /*if student does not belong in class conditional*/
    var selector2 = parseInt(selector.value);
    if(ids.includes(selector2) == false) {
        t_name.innerHTML = "Test Student";
        t_id.innerHTML = selector.value;
        t_grade.innerHTML = "9th";
        t_status.innerHTML = "Doesn't belong here";
        t_time.innerHTML = timestamp2;
        t_comments.innerHTML = "Skips a lot!";

        if(t_status.innerHTML == "Doesn't belong here") {
            t_name.style.backgroundColor = "#ff3232";
            t_id.style.backgroundColor = "#ff3232";
            t_grade.style.backgroundColor = "#ff3232";
            t_status.style.backgroundColor = "#ff3232";
            t_time.style.backgroundColor = "#ff3232";
            t_comments.style.backgroundColor = "#ff3232";
        }
    }
    
    if(selector2 == ids[0]) {
        for(a=0; a<=8; a++){
            if(timestamp <= schedule_start[a] && timestamp > schedule_end[a-1]) {
                s_status.innerHTML = "Present (on time)"; 
            }
            if(timestamp > schedule_start[a] && timestamp < schedule_end[a]) {
                s_status.innerHTML = "Present (late)";
            }
            if(surabhi_schedule.includes(true) == false) {
                s_status.innerHTML = "Absent";
            }
        }
        s_time.innerHTML = timestamp2;
        s_comments.innerHTML = "OwO";

        if(s_status.innerHTML == "Present (late)") {
            s_name.style.backgroundColor = "#b7d2bc";
            s_id.style.backgroundColor = "#b7d2bc";
            s_grade.style.backgroundColor = "#b7d2bc";
            s_status.style.backgroundColor = "#b7d2bc";
            s_time.style.backgroundColor = "#b7d2bc";
            s_comments.style.backgroundColor = "#b7d2bc";
        }
        if(s_status.innerHTML == "Absent" || s_status.innerHTML == "Doesn't belong here") {
            s_name.style.backgroundColor = "#ff3232";
            s_id.style.backgroundColor = "#ff3232";
            s_grade.style.backgroundColor = "#ff3232";
            s_status.style.backgroundColor = "#ff3232";
            s_time.style.backgroundColor = "#ff3232";
            s_comments.style.backgroundColor = "#ff3232";
        }
    }

    if(selector2 == ids[1]) {
        for(a=0; a<=8; a++){
            if(timestamp <= schedule_start[a] && timestamp > schedule_end[a-1]) {
                p_status.innerHTML = "Present (on time)"; 
            }
            if(timestamp > schedule_start[a] && timestamp < schedule_end[a]) {
                p_status.innerHTML = "Present (late)";
            }
            if(phoenix_schedule.includes(true) == false) {
                p_status.innerHTML = "Absent";
            }
        }
        p_time.innerHTML = timestamp2;
        p_comments.innerHTML = "Good Note Taker!";

        if(p_status.innerHTML == "Present (late)") {
            p_name.style.backgroundColor = "#b7d2bc";
            p_id.style.backgroundColor = "#b7d2bc";
            p_grade.style.backgroundColor = "#b7d2bc";
            p_status.style.backgroundColor = "#b7d2bc";
            p_time.style.backgroundColor = "#b7d2bc";
            p_comments.style.backgroundColor = "#b7d2bc";
        }
        if(p_status.innerHTML == "Absent" || p_status.innerHTML == "Doesn't belong here") {
            p_name.style.backgroundColor = "#ff3232";
            p_id.style.backgroundColor = "#ff3232";
            p_grade.style.backgroundColor = "#ff3232";
            p_status.style.backgroundColor = "#ff3232";
            p_time.style.backgroundColor = "#ff3232";
            p_comments.style.backgroundColor = "#ff3232";
        }
    }

    if(selector2 == ids[2]) {
        for(a=0; a<=8; a++){
            if(timestamp <= schedule_start[a] && timestamp > schedule_end[a-1]) {
                k_status.innerHTML = "Present (on time)"; 
            }
            if(timestamp > schedule_start[a] && timestamp < schedule_end[a]) {
                k_status.innerHTML = "Present (late)";
            }
            if(kevin_schedule.includes(true) == false) {
                k_status.innerHTML = "Absent";
            }
        }
        k_time.innerHTML = timestamp2;
        k_comments.innerHTML = "This kid likes programming?";

        if(k_status.innerHTML == "Present (late)") {
            k_name.style.backgroundColor = "#b7d2bc";
            k_id.style.backgroundColor = "#b7d2bc";
            k_grade.style.backgroundColor = "#b7d2bc";
            k_status.style.backgroundColor = "#b7d2bc";
            k_time.style.backgroundColor = "#b7d2bc";
            k_comments.style.backgroundColor = "#b7d2bc";
        }
        if(k_status.innerHTML == "Absent" || k_status.innerHTML == "Doesn't belong here") {
            k_name.style.backgroundColor = "#ff3232";
            k_id.style.backgroundColor = "#ff3232";
            k_grade.style.backgroundColor = "#ff3232";
            k_status.style.backgroundColor = "#ff3232";
            k_time.style.backgroundColor = "#ff3232";
            k_comments.style.backgroundColor = "#ff3232";
        }
    }

    if(selector2 == ids[3]) {
        for(a=0; a<=8; a++){
            if(timestamp <= schedule_start[a] && timestamp > schedule_end[a-1]) {
                j_status.innerHTML = "Present (on time)"; 
            }
            if(timestamp > schedule_start[a] && timestamp < schedule_end[a]) {
                j_status.innerHTML = "Present (late)";
            }
            if(jimmy_schedule.includes(true) == false) {
                j_status.innerHTML = "Absent";
            }
        }
        j_time.innerHTML = timestamp2;
        j_comments.innerHTML = "UwU";

        if(j_status.innerHTML == "Present (late)") {
            j_name.style.backgroundColor = "#b7d2bc";
            j_id.style.backgroundColor = "#b7d2bc";
            j_grade.style.backgroundColor = "#b7d2bc";
            j_status.style.backgroundColor = "#b7d2bc";
            j_time.style.backgroundColor = "#b7d2bc";
            j_comments.style.backgroundColor = "#b7d2bc";
        }
        if(j_status.innerHTML == "Absent" || j_status.innerHTML == "Doesn't belong here") {
            j_name.style.backgroundColor = "#ff3232";
            j_id.style.backgroundColor = "#ff3232";
            j_grade.style.backgroundColor = "#ff3232";
            j_status.style.backgroundColor = "#ff3232";
            j_time.style.backgroundColor = "#ff3232";
            j_comments.style.backgroundColor = "#ff3232";
        }
    }

    if(selector2 == ids[4]) {
        for(a=0; a<=8; a++){
            if(timestamp <= schedule_start[a] && timestamp > schedule_end[a-1]) {
                t_status.innerHTML = "Present (on time)"; 
            }
            if(timestamp > schedule_start[a] && timestamp < schedule_end[a]) {
                t_status.innerHTML = "Present (late)";
            }
            if(student_schedule.includes(true) == false) {
                t_status.innerHTML = "Absent";
            }
        }
        t_time.innerHTML = timestamp2;
        t_comments.innerHTML = "UwU!";

        if(t_status.innerHTML == "Present (late)") {
            t_name.style.backgroundColor = "#b7d2bc";
            t_id.style.backgroundColor = "#b7d2bc";
            t_grade.style.backgroundColor = "#b7d2bc";
            t_status.style.backgroundColor = "#b7d2bc";
            t_time.style.backgroundColor = "#b7d2bc";
            t_comments.style.backgroundColor = "#b7d2bc";
        }
        if(t_status.innerHTML == "Absent" || t_status.innerHTML == "Doesn't belong here") {
            t_name.style.backgroundColor = "#ff3232";
            t_id.style.backgroundColor = "#ff3232";
            t_grade.style.backgroundColor = "#ff3232";
            t_status.style.backgroundColor = "#ff3232";
            t_time.style.backgroundColor = "#ff3232";
            t_comments.style.backgroundColor = "#ff3232";
        }
    }  

}