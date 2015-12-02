package com.github.drechoi.spacefighter;

import com.badlogic.gdx.backends.lwjgl.LwjglApplication;
import com.badlogic.gdx.backends.lwjgl.LwjglApplicationConfiguration;
import com.github.drechoi.spacefighter.MainGame;

public class Main {
	public static void main(String[] args) {
		LwjglApplicationConfiguration cfg = new LwjglApplicationConfiguration();
		cfg.title = "Little Space Fighter";
		/*
		cfg.width = 700;
		cfg.height = 320;
		*/
		
		cfg.width = 480;
		cfg.height = 800;
		new LwjglApplication(new MainGame(), cfg);
	}
}
