package com.pms.RealEstate.dto;

public class ResetPasswordDto {

    private String email_id;
    private String first_name;
    private String password;
    
    
    
    
	public ResetPasswordDto() {
		super();
	}
	public ResetPasswordDto(String email_id, String first_name, String password) {
		super();
		this.email_id = email_id;
		this.first_name = first_name;
		this.password = password;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "ResetPasswordDto [email_id=" + email_id + ", first_name=" + first_name + ", password=" + password
				+ "]";
	}
    
    
}

