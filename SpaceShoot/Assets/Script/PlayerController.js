#pragma strict
// 飞机运动速度
var speed:float = 2.0f;

function Update () { 
	
	if(transform.position.x<-7.1){
		transform.position.x = 7.1;
	}else if(transform.position.x>7.1){
		transform.position.x = -7.1;
	}
	// 移动物体 （x,y,z） 按下键盘上的（"A","D","←","→"）主角在x轴方向上移动 
	transform.Translate(Input.GetAxis("Horizontal")*Time.deltaTime*speed,0,0);
}