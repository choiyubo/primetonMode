package com.primeton.eos.Util;


import java.util.UUID;

import com.eos.system.annotation.Bizlet;

/**
 * 获取uuid
 * @author caiyubo
 *
 */
@Bizlet("GetUUID")
public class GetUUID {

	/**
	 * 
	 * @return
	 */
	@Bizlet("")
	public static String getUUID() {
		// TODO 自动生成的方法存根
		String uuid = "";
		String uuidStr = UUID.randomUUID().toString();
		String[] split = uuidStr.split("-");
		for (String string : split) {
			uuid+=string;
		}
		return uuid;
	}
}
