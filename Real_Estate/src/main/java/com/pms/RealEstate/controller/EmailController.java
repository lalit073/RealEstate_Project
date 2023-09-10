package com.pms.RealEstate.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.RealEstate.model.Accounts;
import com.pms.RealEstate.model.EmailRequest;
import com.pms.RealEstate.service.AccountService;

@CrossOrigin("*")
@RestController
public class EmailController {

   @Autowired
    JavaMailSender javaMailSender;
   
@Autowired
AccountService accountservice;

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest)
    {
    System.out.println(emailRequest);
    Accounts a = accountservice.getEmailId(emailRequest.getTo());
    if(a!=null) {
    
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(emailRequest.getTo());
            message.setSubject("RealEstate Management System ");
            message.setText("Thank you for registering on RealEstate Management System . We are excited to have you!");
            System.out.println(message);
            javaMailSender.send(message);
           
            return "Email sent successfully!";
    }
    else {
    return null;
    }
   
    }
}
