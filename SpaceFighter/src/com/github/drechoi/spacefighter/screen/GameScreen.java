package com.github.drechoi.spacefighter.screen;

import com.badlogic.gdx.InputMultiplexer;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.drechoi.spacefighter.MainGame;


public class GameScreen implements Screen {
	
	// ------------------- instance variables ---------------- //
	
	private final MainGame app_;
	
	private final InputMultiplexer im = new InputMultiplexer();
	
	//private InGameUI ui_;
	private Screen ui_;

	
	// -------------- getter setter ------------- //
	
	//  TODO: to be implement
	public Object getCamera(){ return null; }
	public Viewport getViewport(){ return null; }
	
	// ------------------- constructor ------------------- ///
	public GameScreen(MainGame app)
	{	
		app_ = app;
				
		// ui_ = new InGameUI(new ScalingViewport(Scaling.fill, DISPLAY_WIDTH * InGameUI.UNIT_SCALE, DISPLAY_HEIGHT * InGameUI.UNIT_SCALE), this);
		// ui_.init();
		
		// im.addProcessor(ui_);		
	}
	
	@Override
	public void show() {
		// create In-Game Menu
				
		// create view port camera 
		
		// create game world
		
		// update Input Multiplexer
		
	}

	@Override
	public void render(float delta) {
		// TODO Auto-generated method stub		
	}

	@Override
	public void resize(int width, int height) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void pause() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void resume() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void hide() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void dispose() {
		// TODO Auto-generated method stub
		
	}
	
}
