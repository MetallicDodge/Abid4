import {Prisma, PrismaClient} from "@prisma/client"

const client = new PrismaClient();

const getaddress = ():Prisma.userCreateInput[]=>
[
     {
        payment_id : "0121";
        payment_type : "Cash";
        payment_date : "25-2-2023";
        price : "2099";
        order : "zxc";    
    }

];
[
    {
       payment_id : "0121";
       payment_type : "UPI";
       payment_date : "19-2-2023";
       price : "1099";
       order : "zxc";     
   }

];
[
    {
       payment_id : "0121";
       payment_type : "Cash";
       payment_date : "25-2-2023";
       price : "2599";
       order : "zxc";     
   }

];
[
    {
       payment_id : "0121";
       payment_type : "Card";
       payment_date : "02-07-2023";
       price : "5099";
       order : "zxc";     
   }

];
[
    {
       payment_id : "0121";
       payment_type : "UPI";
       payment_date : "25-08-2023";
       price : "1059";
       order : "zxc";     
   }

];

