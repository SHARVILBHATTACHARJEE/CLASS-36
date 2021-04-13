class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1")
        title.position(130,0)
        title.html("CAR RACING")
        var input=createInput("NAME")
        input.position(130,160)
        var button=createButton("START")
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            var greeting=createElement("h2")
            greeting.position(130,160)
            greeting.html("HELLO "+name)
            playerCount++
            player.updateCount(playerCount)
            player.updateInfo(name)
        })
    }
}