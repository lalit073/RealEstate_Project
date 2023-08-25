package com.pms.RealEstate.service;

import java.util.List;


import com.pms.RealEstate.dto.LoginDto;
import com.pms.RealEstate.model.Accounts;


public interface AccountService {

	Accounts registerUser(Accounts accounts);

	List<Accounts> getAllAccounts();

	Accounts verifyaccount(LoginDto userlogin);

	boolean update(Accounts a);

	

}
