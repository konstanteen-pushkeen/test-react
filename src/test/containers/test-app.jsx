import React, { Component, Fragment } from 'react';

import Title from '../components/header/test-title';
import Input from '../components/main/test-input';
import Filters from '../components/main/test-filters';
import Footer from '../components/footer/test-footer';
import List from '../components/main/test-list';

import '../../style.css'

class Test extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchListItem = this.handleSearchListItem.bind(this);
        this.handleRestoreListItem = this.handleRestoreListItem.bind(this);        
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this.handleDeleteItemList = this.handleDeleteItemList.bind(this);
        this.handleToggleClass = this.handleToggleClass.bind(this);
        this.handleClearList = this.handleClearList.bind(this);
        this.handleSortItem = this.handleSortItem.bind(this);

        this.state = {
            inputText: "",
            inputListItem: [],
        };
    }

    handleInputChange = (e) => {
        this.setState({
            inputText: e.target.value,
        })
    }

    handleSearchListItem = (e) => {
        e.preventDefault();
        const { inputText, inputListItem } = this.state;        
        const arrayResultSearch = inputListItem.filter(obj => obj.itemName === inputText);        

        this.setState({
            inputListItem: arrayResultSearch,
            dublicateListItem: inputListItem,
        })
    }
    
    handleRestoreListItem = (e) => {
        e.preventDefault();
        const dublicateListItem = this.state.dublicateListItem;

        this.setState({
            inputListItem: dublicateListItem,
            dublicateListItem: [],
        })
    }

    handleAddListItem = (e) => {
        e.preventDefault();
        const { inputText, inputListItem } = this.state;
        const [itemName, itemQuantity, itemPrice] = inputText.split("/");
        const itemKey = `${itemName}-${itemQuantity}шт-${itemPrice}р`;
        const itemCheck = false;
        const itemSort = false;
        const listItem = { itemName, itemQuantity, itemPrice, itemKey, itemCheck, itemSort };
        inputListItem.push(listItem);

        this.setState({
            inputText: "",
            inputListItem: inputListItem,
        })
    }

    handleDeleteItemList = (key) => {
        const inputListItem = this.state.inputListItem;
        const indexArray = inputListItem.findIndex(obj => obj.itemKey === key);
        inputListItem.splice(indexArray, 1);

        this.setState({
            inputListItem: inputListItem,
        })
    }

    handleToggleClass = (key, flag) => {
        const inputListItem = this.state.inputListItem;
        inputListItem.map(obj => {
            if (obj.itemKey === key) {
                if (obj.itemCheck === flag) {
                    obj.itemCheck = !obj.itemCheck;
                }
            }
            return obj.itemCheck;
        })

        this.setState({
            inputListItem: inputListItem,
        })
    }

    handleClearList = (e) => {
        e.preventDefault();

        this.setState({
            inputListItem: [],
        })
    }

    handleSortItem = (id) => {
        const inputListItem = this.state.inputListItem;
        const stateSortArray = Boolean(inputListItem.find(obj => obj.itemSort));
        
        if (!stateSortArray) {
            if (id === "name") {
                inputListItem.sort((a, b) => a.itemName > b.itemName ? 1 : -1);
                inputListItem.map(obj => obj.itemSort = true);
            } else if (id === "quantity") {
                inputListItem.sort((a, b) => +a.itemQuantity > +b.itemQuantity ? 1 : -1);
                inputListItem.map(obj => obj.itemSort = true);
            } else if (id === "price") {
                inputListItem.sort((a, b) => +a.itemPrice > +b.itemPrice ? 1 : -1);
                inputListItem.map(obj => obj.itemSort = true);
            }
        } else {
            if (id === "name" || id === "quantity" || id === "price") {
                inputListItem.reverse();
                inputListItem.map(obj => obj.itemSort = false);
            }      
        }     
     
        this.setState({
            inputListItem: inputListItem,
        })
    }

    render() {
        const inputListItem = this.state.inputListItem;
        const inputText = this.state.inputText;
        let arrayPriceItem = [];
        let buttonSearch;
        inputListItem.forEach(obj => arrayPriceItem.push(+obj.itemPrice));
                
        let totalPrice = arrayPriceItem.reduce((sum, current) => sum + current, 0);        
        
        if (inputText) {
            buttonSearch = this.handleSearchListItem;
        } else {
            buttonSearch = this.handleRestoreListItem;
        }

        return (
            <Fragment>
                <Title title="список покупок"
                       onSearchItem={buttonSearch} />
                <main>
                    <Input text="добавить"
                        onChange={this.handleInputChange}
                        onClick={this.handleAddListItem}
                        value={this.state.inputText}
                    />                    
                    <Filters onClearList={this.handleClearList} onSortItem={this.handleSortItem} />
                    <List arr={this.state.inputListItem}
                        onClick={this.handleDeleteItemList}
                        onToggle={this.handleToggleClass} />
                </main>
                <Footer text="итого:" totalPrice={totalPrice} />
            </Fragment>
        );
    }
}

export default Test;