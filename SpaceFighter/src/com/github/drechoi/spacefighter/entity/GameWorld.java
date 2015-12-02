package com.github.drechoi.spacefighter.entity;

import com.badlogic.gdx.scenes.scene2d.Stage;
import com.github.drechoi.spacefighter.GameException;
import com.github.drechoi.spacefighter.screen.GameScreen;


public class GameWorld extends Stage{

	// ----------- singleton ------------ //
	private static GameWorld instance_;
	public static GameWorld getInstance()
	{
		if(instance_ == null)
		{
			throw new GameException("World is not created yet");
		}
		
		return instance_;
	}
	
	public static GameWorld CreateWorld(GameScreen parent /*, GameLevel level or stage*/)
	{
		return new GameWorld(parent);
	}
	
	private GameWorld(GameScreen parent)
	{
		super(parent.getViewport());
		
	}
	
	
	
	
	@Override
	public void dispose() {
		super.dispose();

		// clear the instance
		instance_ = null;
	}
}
