
const socket = io.connect('http://localhost:9000')

const init = async () => {
    const initOrbs = await socket.emitWithAck('init', {
        playerName: player.Name
    })

    console.log(initOrbs)
    orbs = initOrbs;
    draw();
}

socket.on('initReturn', (initData) => {

})