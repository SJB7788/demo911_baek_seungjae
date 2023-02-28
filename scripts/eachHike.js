function displayHikeInformation() {
    let params = new URL(window.location.href)
    console.log(params)
    let ID = params.searchParams.get("docID");
    console.log(ID)

    db.collection("hikes").doc(ID).get().then( thisHike => {
        hikeInfo = thisHike.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.name

        document.getElementById("hikeName").innerHTML = hikeName;
        let imgEvent = document.querySelector( ".hike-img" );
            imgEvent.src = "../images/" + hikeCode + ".jpg";
    })
}

displayHikeInformation()