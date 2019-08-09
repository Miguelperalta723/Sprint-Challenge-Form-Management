import React from 'react'
import {sum} from'./sum'

describe('sum.js', () => {
    describe('sum()', ()=>{
       it('sums two integers', () => {

     expect(sum(1, 2)).toBe(3)
   }); 
    })
    
})