function call()
{
    if(check(count))
    {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            document.querySelector("div").style.backgroundColor = clickedColor ;
            messageDisplay.textContent = "Correct!!";
            changeColor(clickedColor, squares.length);
            playAgain.textContent = "PLAY AGAIN?";
            NUM = NUM + 1;
            if(NUM == 1)
            alert("CONGRATULATIONS YOU WON!!!!");
            else
            alert("PLAY AGAIN!! YOU WON!!")
        }
