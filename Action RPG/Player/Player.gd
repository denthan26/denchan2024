extends CharacterBody2D


#const SPEED = 300.0
#const JUMP_VELOCITY = -400.0
#var velocit = Vector2.ZERO
# Get the gravity from the project settings to be synced with RigidBody nodes.
# var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	input_vector.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
	
	if input_vector != Vector2.ZERO:
		velocity = input_vector
	else:
		velocity = Vector2.ZERO
	move_and_collide(velocity)

# 基础的人物移动	
#func _physics_process(delta):
	#if Input.is_action_pressed("ui_left"):
		#velocity.x = -4
	#elif Input.is_action_pressed("ui_right"):
		#velocity.x = 4
	#elif Input.is_action_pressed("ui_up"):
		#velocity.y = -4
	#elif Input.is_action_pressed("ui_down"):
		#velocity.y = 4
	#else:
		#velocity.x = 0
		#velocity.y = 0
	#
	#move_and_collide(velocity)
