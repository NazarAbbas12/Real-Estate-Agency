
    
    document.getElementById("price-search").addEventListener("change",function()
{
    const selectedOption=this.value;

    if(selectedOption==="RENT")
    {
        window.open('rent.html');
    }
    else if(selectedOption==="PURCHASE")
    {
        window.open('purchase.html');
    }
});
