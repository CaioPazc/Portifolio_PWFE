
var troca = false
function mudaFoto(item) {
    if (item == 1 && troca == false) {
        document.getElementById("menu").src = "java.png"

    } else if (item == 2 && troca == false) {
        document.getElementById("menu").src = "css-3.png"

    } else if (item == 3 && troca == false) {
        document.getElementById("menu").src = "html.png"

    } else if (item == 4 && troca == false) {
        document.getElementById("menu").src = "tecnologia.png"
    }else {
        document.getElementById("menu").src = ""
        troca = true

    }
}
function retornafoto() {
    document.getElementById("menu").src = "sinais-de-codigo.png"
}
