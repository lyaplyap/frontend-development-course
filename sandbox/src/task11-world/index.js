/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */

 export async function theWorld(ms) {
    const seconds = ms / 1000;
    // Выводим сообщение о том, сколько осталось секунд до возобновления
    for (let i = seconds; i > 0; i--) {
        console.log(`Time will continue running in ${i} second${i > 1 ? 's' : ''}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log("Time is running again!");
}

