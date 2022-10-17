import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./payment.css"
import { FormControl,FormLabel,Input,Button} from '@chakra-ui/react'
const Amount=localStorage.getItem("total-amount"); 

const Payment = () => {
  const navigate=useNavigate()
  return (
   <div className='checkout-container'>
      <FormControl className='checkout-form'>
       <div className='checkout-row'>
         <div className='checkout-columns'>
           <div className='checkout-wrapper'>
             {/*left margin */}
              <div className='checkout-left-margin'></div>
              <div className='checkout-form-detail'>
                 <div className='checkout-title'>
                 <span>Checkout</span>
                 </div> 
                 <div className='shippingAddress'>
                    <div className='shippingAddress'>
                      <div className='shippingAddressHeader'>
                        <div className='row-fluid'>
                           <div className='shipping-address-title'>shipping address</div> 
                        </div>
                      </div>
                  
                      <div className='address-form-wrapper'>
                        <div className='address-form-container'>
                          <div>
                              <div className='address-form-row'>
                              <div className='address-form-row'>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='firstName' className='address-form-label'>First Name</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='laststName' className='address-form-label'>Last Name</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                </div>
                              </div>
                              <div className='address-form-row'>
                              <div className='address-form-row'>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='address' className='address-form-label'>Street Address</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='companyName' className='address-form-label'>Company Name(Optional)</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                              <div className='address-form-row'>
                              <div className='address-form-row'>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='city' className='address-form-label'>City</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='zipCode' className='address-form-label'>Zip Code</FormLabel>
                                    <input type='number' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                              <div className='address-form-row'>
                              <div className='address-form-row'>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='country' className='address-form-label'>Country / Region</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='state' className='address-form-label'>state</FormLabel>
                                    <input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                              <div className='address-form-row'>
                              <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='phone' className='address-form-label'>phone number</FormLabel>
                                    <input type='number' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
                 {/* payment */}
                 <div className='checkout-form-detail'>
                 <div className='shippingAddress'>
                    <div className='shippingAddress'>
                      <div className='shippingAddressHeader'>
                        <div className='row-fluid'>
                           <div className='shipping-address-title'>Card Details</div> 
                        </div>
                      </div>
                  
                      <div className='address-form-wrapper'>
                        <div className='address-form-container'>
                          <div>
                              <div className='address-form-row'>
                              <div className='address-form-row'>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='card number' className='address-form-label'>Card Number</FormLabel>
                                    <Input type='number' placeholder='XXXX-XXXX-XXXX-XXXX' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='expiryDate' className='address-form-label'>expiration date</FormLabel>
                                    <Input type='date' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                </div>
                              </div>
                              <div className='address-form-row'>
                              <div className='address-form-row'>
                                <div className='address-form-column'>
                                  <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='name' className='address-form-label'>Card holder name</FormLabel>
                                    <Input type='text' className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                                <div className='address-form-column'>
                                <div className='address-form-input-md'>
                                    <div className='address-form-input-container'>
                                    <FormLabel htmlFor='code' className='address-form-label'>Security Code</FormLabel>
                                    <Input type='password' maxLength="3" className='address-form-input' />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
                 </div>
              </div>
              {/* right margin */}
              <div className='checkout-right-margin'></div>
              <div className='checkout-order-summary-container'>
                <div style={{position:"relative"}}>
                   <div className='order-summary-heading'>
                    <div style={{textTransform:"uppercase"}}>order summary</div>
                   </div>
                   <div className='order-summary-total-container'>
                    <div className='spacerOrder'></div>
                    <div className='order-summary-total'>
                      <div className='order-summary-subtotal'>
                        <div className='order-summary-subtotal-left'>
                          <div style={{paddingBottom:"10px"}}>Subtotal</div>
                          <div>Shipping Charges</div>
                        </div>
                        <div className='order-summary-subtotal-right'>
                          <div>${Amount}</div>
                          <div>(free)</div>
                        </div>
                      </div>
                      <div className='order-summary-overallTotal'>
                        <div className='order-summary-overallTotal-left'>
                          <div>Order Total (USD)</div>
                        </div>
                        <div className='order-summary-overallTotal-right'>
                          <div>${Amount}</div>
                        </div>
                      </div>
                    </div>
                   </div>
                </div>
                <div>
                  <Button colorScheme='green' className='order-place-order-button' onClick={()=>navigate("/cart/payment/placed")}>Place Order</Button>
                </div>
              </div>
           </div>
         </div>
       </div>
     </FormControl>
   </div>
  )
}

export default Payment