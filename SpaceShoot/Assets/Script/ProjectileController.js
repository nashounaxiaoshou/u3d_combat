#pragma strict

// 子弹的运动速度
var speed:float = 10.0f;

function Update () {
	if(transform.position.y>5.4){
		transform.position.y = -4;
	} 
	// 移动物体 （x,y,z） 按下键盘上的（"A","D","←","→"）主角在x轴方向上移动 
	transform.Translate(0,Time.deltaTime*speed,0);
}