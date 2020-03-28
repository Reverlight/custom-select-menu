window.addEventListener('load', () => {
    const options = document.querySelectorAll('option');

    const optionValues = [];

    options.forEach(element => {
        optionValues.push(element.innerHTML);
    });




    const customSelect = document.createElement('DIV');
    const optionSelected = document.createElement('DIV');
    const optionItems = document.createElement('DIV');



    customSelect.setAttribute('id', 'custom-select');
    customSelect.setAttribute('name', 'custom-restaurant-menu"')
    optionSelected.setAttribute('id', 'option-selected');
    optionItems.setAttribute('id', 'option-items');

    document.body.appendChild(customSelect);
    customSelect.appendChild(optionSelected);
    customSelect.appendChild(optionItems);

    optionValues.forEach((optionValue) => {
        let customOption = document.createElement('DIV');
        customOption.innerText = optionValue;
        optionItems.append(customOption);
    })





    const firstOptionValue = optionValues[0];
    optionSelected.innerHTML = firstOptionValue;


    optionSelected.addEventListener('click', () => {
        optionItems.classList.toggle('active');
    })

    optionItems.addEventListener('click', (e) => {
        const currentOption = e.target;
        optionSelected.innerText = currentOption.innerText;
        optionItems.classList.toggle('active');

        clearActiveOptions();
        currentOption.classList.add('active');

    })


    function clearActiveOptions() {
        let customOptions = document.querySelectorAll('#option-items div')

        customOptions.forEach((option) => {

            option.classList.remove('active');
        })

    }







})