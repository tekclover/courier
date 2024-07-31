package com.courier.overc360.api.util;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TextFileParser {
	
	public void m () throws URISyntaxException, IOException {
		
		 Path temp = Files.move (
					 	Paths.get("D:\\Murugavel R\\Project\\7horses\\root\\Classic WMS\\test\\BOM_Header_V0.1.csv"),
				        Paths.get("D:\\Murugavel R\\Project\\7horses\\root\\Classic WMS\\test\\proc\\BOM_Header_V0.1.csv")
			        );
		 System.out.println(temp);
	}

	public static void main(String[] args) throws URISyntaxException, IOException {
		new TextFileParser().m();
	}
}
