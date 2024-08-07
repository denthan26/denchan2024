extends Sprite2D


# Called when the node enters the scene tree for the first time.
func _ready():
	# 隐藏鼠标
	Input.mouse_mode = Input.MOUSE_MODE_HIDDEN
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# 按住alt键时显示鼠标
	if Input.get_action_strength("ALT"):
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	else :
		Input.mouse_mode = Input.MOUSE_MODE_HIDDEN
	pass
