import React,{useEffect} from 'react'
import downArrow from "../../assets/DownArrow.svg"
const AnalyticsDropdown = () => {
    useEffect(() => {
        const button = document.querySelector(".select-dropdown__button");
        const listItems = document.querySelectorAll(".select-dropdown__list-item");
        
        button.addEventListener('click', () => {
            const dropdownList = document.querySelector(".select-dropdown__list");
            dropdownList.classList.toggle("active");
        });

        listItems.forEach(item => {
            item.addEventListener('click', () => {
                const itemValue = item.dataset.value;
                console.log(itemValue);
                const buttonSpan = document.querySelector(".select-dropdown__button span");
                buttonSpan.innerText = item.textContent;
                button.setAttribute('data-value', itemValue);
                const dropdownList = document.querySelector(".select-dropdown__list");
                dropdownList.classList.remove("active");
            });
        });
    }, []);
  return (
    <div className="container">
	<div className="select-dropdown">
		<button href="#" role="button" data-value="" className="select-dropdown__button"><span>Select Period </span> <img src={downArrow}/>
		</button>
		<ul className="select-dropdown__list">
			<li data-value="1" className="select-dropdown__list-item">Item 1</li>
			<li data-value="2" className="select-dropdown__list-item">Item 2</li>
			<li data-value="3" className="select-dropdown__list-item">Item 3</li>
			<li data-value="4" className="select-dropdown__list-item">Item 4</li>
		</ul>
	</div>
</div>

  )
}

export default AnalyticsDropdown