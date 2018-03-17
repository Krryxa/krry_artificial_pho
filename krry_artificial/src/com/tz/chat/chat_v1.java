package com.tz.chat;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

/**
 * JIMI智能客服机器人
 * @author krry
 * @version v1.0
 *
 */
public class chat_v1 {
	
	/**
	 * 对话智能客服获取答案
	 * @param message 用户输入的信息
	 * @return 智能客服回复
	 */
	public static String getResult(String message){
		//设置请求编码格式utf-8
		StringBuffer buffer = new StringBuffer();
		
		try {
			String question = URLEncoder.encode(message,"utf-8");
			//请求url 对接图灵机器人的接口
			String requesUrl = "http://www.tuling123.com/openapi/api?"+"key=5f1c8ac4920c44d7a452b5b4868f1ca8&info="+question;
			//建立网络连接
			URL urlObj = new URL(requesUrl);
			//获取连接对象
			URLConnection connection = urlObj.openConnection();
			//直接连接
			connection.connect();
			//获取请求的结果
			InputStreamReader reader = new InputStreamReader(connection.getInputStream(),"utf-8");
			//建立缓冲流
			BufferedReader br = new BufferedReader(reader);
			
			String temp = null;
			while((temp = br.readLine()) != null){
				buffer.append(temp);
			}
			//关闭流
			reader.close();
			br.close();
		} catch (Exception e) {
			
			e.printStackTrace();
		}
//		System.out.println(buffer.toString());
		return buffer.toString();
	}
	

}
