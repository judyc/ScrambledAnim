#pragma strict
var clip: AnimationClip[];
var anim: Animator;
//get current animation state
var currentState: AnimatorStateInfo;

function Start () {

}

function Update () {
    //triggerAnim();
}

function FixedUpdate(){
    anim = GetComponent(Animator);
    currentState = anim.GetCurrentAnimatorStateInfo(0);

    if(Input.GetButtonDown("beeAttack")){
        anim.SetBool("beeAttack", true);
    } else anim.SetBool("beeAttack", false);
}

function triggerAnim(){

    /*-----Legacy Animation Trigger Script

    if(Input.GetKey ("g")){
        animation.Play(clip[1].name);
    } else animation.Play(clip[0].name);

    */
}

