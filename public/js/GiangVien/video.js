let id_vid = sessionStorage.getItem('ID_VIDEO');
let link = sessionStorage.getItem('VIDEO_' + id_vid);
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

function getSrc() {
    //console.log(id_vid);
    //console.log(link);
    return document.getElementById('video_inp').setAttribute('src', link);
}
window.addEventListener('load', getSrc);

function whoami() {
    let id = UserInfo.id;
    id = id.toString();
    id = id.substring(0, 2);
    if(id == 'GV') {
        document.getElementById('goback').setAttribute('href', 'course-detailsGV.html');
    }
    else {
        document.getElementById('goback').setAttribute('href', 'course-details.html');
    }
}
window.addEventListener('load', whoami);

