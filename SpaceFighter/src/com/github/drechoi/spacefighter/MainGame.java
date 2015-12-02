package com.github.drechoi.spacefighter;

import java.lang.reflect.InvocationTargetException;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.Screen;
import com.github.drechoi.spacefighter.screen.GameScreen;


public class MainGame extends Game {
	// ---------------- singleton ?? ------------------------- //
	@Deprecated
	private static MainGame instance_;
	@Deprecated
	public MainGame getInstance(){ return instance_; }
	
	// ---------------- game screens enum ----------------- //
	public enum ScreenId
	{		
		MAIN_MENU,
		GAME_SCREEN;
	}
	
	// -------------- instance functions ------------------ //
	
	@Override
	public void create() 
	{
		init();
		
		changeScreen(ScreenId.GAME_SCREEN);
	}
	


	@Deprecated
	private void init()
	{
		// initial instance
		if(instance_ != null)
		{
			// dispose the old instance
			instance_.dispose();
			instance_ = null;
		}
		
		instance_ = this;
	}
	
	
	public void changeScreen(ScreenId screenId)
	{
		Screen screen = null;
		
		// create the screen object before it show
		switch(screenId)
		{
		case GAME_SCREEN:
			screen = new GameScreen(this);
			break;
		case MAIN_MENU:
			screen = null;
			break;
		default:
			screen = null;
			break;
		}
		
		if(screen == null)
		{
			throw new GameException("Invalid Screen ID " + screenId);
		}
		
		// anythg to do b4 screen shown?
		
		
		// set screen
		this.setScreen(screen);
	}
}
