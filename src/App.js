import React from 'react';
import './App.scss';
import { ReactComponent as IconLock } from './assets/svg/lock.svg'
import { ReactComponent as IconTrash } from './assets/svg/trash.svg'

function App() {
    return (
        <div className='cart'>
            <div className="cart__order">
                <div className="cart__order-items">
                    <div className="cart__order-item cart__order-item--header">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Qty</div>
                        <div>Total</div>
                    </div>
                    <div className="cart__order-item">
                        <div>Ambient® Lighting Palette</div>
                        <div className='cart__price'>$64.99</div>
                        <div className='cart__order-item-qty'>
                            <button className="btn-qty">-</button>
                            <span>1</span>
                            <button className="btn-qty">+</button>
                        </div>
                        <div className='cart__price'>$64.99</div>
                        <buttom className="btn-remove">
                            <IconTrash/>
                        </buttom>
                    </div>
                </div>
                <div className="cart__order-info">
                    <div className="form-group">
                        <label htmlFor="note" className='form-label'>Add a note</label>
                        <input id='note' type="text" placeholder='Some words to our team' className="form-input"/>
                    </div>
                </div>
            </div>
            <div className="cart__order-summary">
                <div className="cart__total">
                    Cart total <span className='cart__price ml-1'>$189.90</span>
                </div>
                <p>Shipping & taxes will calculated at checkout</p>
                <label className="form-checkbox my-4">
                    <input type="checkbox"/>
                    <span className="checkmark"/>
                    I agree to <a href='/'>Terms & Conditions</a>
                </label>
                <button className="btn btn--black">
                    Checkout
                    <IconLock/>
                </button>
            </div>
        </div>
    );
}

export default App;
