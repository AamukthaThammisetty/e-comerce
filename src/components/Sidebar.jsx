import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { FiTrash2 } from 'react-icons/fi';
function Sidebar(){
  const {isOpen,handleClose}=useContext(SidebarContext);
  const {cart,clearCart,total}=useContext(CartContext)
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-transform duration-300 z-20 px-4 lg:px-[35px] md:w-[35vw] xl:max-w-[30vw] ${
        isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
       <div  onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'/>
       </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[520px] overflow-y-auto overflow-hidden'>
        {cart.map(item=>{
        return <CartItem item={item} key={item.id}/>
      })}</div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className=' flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'><span>Total:</span>$ {parseFloat(total).toFixed(2)}</div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2/></div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
