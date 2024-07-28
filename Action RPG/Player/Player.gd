extends CharacterBody2D


const MAX_SPEED = 100.0  # 最大速度
const ACCELERATION = 20  # 加速度
const FRICTION = 800  # 摩擦力
#const JUMP_VELOCITY = -400.0
#var velocit = Vector2.ZERO
# Get the gravity from the project settings to be synced with RigidBody nodes.
# var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	input_vector.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
	input_vector = input_vector.normalized()
	
	if input_vector != Vector2.ZERO:
		# 如果想实现角色越走越快，可以使用如下的方式，加速
		velocity += input_vector * ACCELERATION
		# velocity = input_vector * MAX_SPEED
		# 4.x clamp 变为 limit_lenght
		velocity = velocity.limit_length(MAX_SPEED)
	else:
		# 希望角色在停止按键时会滑行一段距离
		velocity = velocity.move_toward(Vector2.ZERO, FRICTION * delta)
	# 这个函数自动处理移动和碰撞
	# move_and_collide(velocity)
	
	move_and_slide()

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
