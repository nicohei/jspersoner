var rvgs = [
    {
        fornavn: "Simen",
        etternavn: "Heien",
        stilling: "Elev",
        jobbTelefon: "111-222-333",
        privatTelefon: "415 42 022",
        bilde: "Heien.jpg",
        info: "Simen H er veldig glad i potter med gull."
    },
    {
        fornavn: "Simen",
        etternavn: "Brock-Støa",
        stilling: "Elev",
        jobbTelefon: "222-222-333",
        privatTelefon: "444-555-678",
        bilde: "https://as1.ftcdn.net/jpg/02/27/23/28/1000_F_227232898_PxQgaFOIdFVoyfzR7rAwh82pXGttwsxC.jpg",
        info: "Simen B kommer snart til å få lunge kreft hvis han fortsetter med vapen sin."
    },
    {
        fornavn: "Eik",
        etternavn: "Dedekam Simonsen",
        stilling: "Elev",
        jobbTelefon: "333-222-333",
        privatTelefon: "444-555-123",
        bilde: "https://childteenfamilytherapy.com/wp-content/uploads/2017/02/shutterstock_379306531.jpg",
        info: "Eik har uendelig penger som han bruker hele tiden."
    },
    {
        fornavn: "Andy",
        etternavn: "Nguyen",
        stilling: "Elev",
        jobbTelefon: "444-222-333",
        privatTelefon: "444-555-456",
        bilde: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfISGAfAg4VuEdz_mYXCY9txFDuqdwyNEsskMcM0tbJ1Dw4q3PopiAe_WTnzTL5fBiNQ8SNRBzJ5EHH5Z_30yrVzUoPpA4GrEA30.jpg?r=34d",
        info: "Andy ble trent opp av samuraier i et tempel."
    },
    {
        fornavn: "Serdar",
        etternavn: "Durmus",
        stilling: "Lærer",
        jobbTelefon: "555-222-333",
        privatTelefon: "444-555-789",
        bilde: "https://cv-hjelpen.no/wp-content/uploads/2023/01/laerer.webp",
        info: "Serdar er en morsom lærer."
    },
]
function myClick(){
    
    let elevNavn = document.getElementById("navnet").value
    let tinyText = elevNavn.toLowerCase()
    const arr = tinyText.split("")
    let bigText = arr[0].toUpperCase()
    arr.shift()
    arr.unshift(bigText)
    const personNavn = arr.join("")
    console.log(personNavn);
    var funnet = false
    document.getElementById("person").innerHTML = "";
    document.getElementById("feilMelding").innerHTML = "";


    rvgs.forEach(elev => {
        if (personNavn === elev.fornavn) {
            // document.getElementById("person").innerHTML = "";
            let create = document.createElement("img")
            create.setAttribute("class", "img")
            create.src = elev.bilde
            document.getElementById("person").append(create)

            let nameCreate = document.createElement("h2")
            nameCreate.textContent = elev.fornavn
            document.getElementById("person").append(nameCreate)
            
            let stillingCreate = document.createElement("h4")
            stillingCreate.innerHTML = "Stilling: " + elev.stilling + `<br>Jobbtelefon: ` + elev.jobbTelefon + `<br>Privattelfon: ` + elev.privatTelefon
            document.getElementById("person").append(stillingCreate)
            
            let infoCreate = document.createElement("p")
            infoCreate.textContent = elev.info
            document.getElementById("person").append(infoCreate)

            funnet = true;
        } 
        
    })
    document.getElementById("navnet").value = ""
    if (!funnet) {
        let feil = document.createElement("p")
        feil.innerText = "Finner ikke person"
        document.getElementById("feilMelding").append(feil)
        document.getElementById("person").innerHTML = "";
    }
}
