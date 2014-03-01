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

    if(Input.GetButtonDown("Fire1")){
        anim.SetBool("beetleAttack", true);
    } else anim.SetBool("beetleAttack", false);


    if(Input.GetButtonDown("Fire2")){
        anim.SetBool("death", true);
    } else anim.SetBool("death", false);
}

function triggerAnim(){

    /*-----Legacy Animation Trigger Script

    if(Input.GetKey ("g")){
        animation.Play(clip[1].name);
    } else animation.Play(clip[0].name);

    */
}

