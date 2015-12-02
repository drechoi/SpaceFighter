package com.github.drechoi.spacefighter;

public class GameException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3217120181792586900L;

	public GameException(Exception exception)
	{
		super(exception);
	}
	
	public GameException(String message)
	{
		super(message);
	}
}
