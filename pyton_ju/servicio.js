const uri="https://api.spotify.com/v1/artists/48bqPGhLPTuS8gKg3UTtf9/top-tracks?market=us"

const token="Bearer BQDhSHz8x3aMVMj7Luupes5Kug49U49SvfXN0apn_Vy6qEMWF8zokUe5FM4hLsPP0r2wkeNGeCnLjtOEAheBpYRML2zikm4Ki4st9HeBPwqUrwiJ3_friMv-GV2oCfYZs67gTV6wVuwlZp0hHR-eRb37ro_ZHWz5UbA"


const parametros_peticion={
method:"GET",
headers:{Authorization:token}
}

fetch(uri,parametros_peticion)
.then(function(respueta){
    return(respueta.json())
})
.then(function(respuesta){
    pint_canciones(respuesta.tracks)
})
.catch(function(respueta){
    console.log("upss..."+respueta)
})

function pint_canciones(canciones){
    console.log(canciones);
}