#pragma strict
var tr : Transform;

var animSpeed = 1.5;
var anim: Animator;

//get current animation state
var currentState: AnimatorStateInfo;

//convert the states to hash used to compare with current state
var locoState = Animator.StringToHash("Base Layer.Locomotion");
var jumpState = Animator.StringToHash("Base Layer.JumpLeap");
var doublejumpState = Animator.StringToHash("Base Layer.DoubleJump");
var eggRunState = Animator.StringToHash("Base Layer.EggLocomotion");

var IsDoubleJump = false;
var HasDoubleJumped = false;

function Start () {
    //Rotate Character facing X-AXIS
    tr = transform;
    tr.Rotate(0.0, -90, 0.0);
}

function Update () {
    anim.speed = 1.2;
}

function FixedUpdate(){
    anim = GetComponent(Animator);
    currentState = anim.GetCurrentAnimatorStateInfo(0);

    var h = Input.GetAxis("Horizontal"); //h variable as the horizontal axis
    var v = Input.GetAxis("Vertical"); //v variable as the vertical axis

    if(Input.GetKey("w")){
        transform.Translate(Vector3.forward * Time.deltaTime*0.5);
        anim.SetFloat("Speed", v-0.7);
    } else
    {
        anim.SetFloat("Speed", 0);
        transform.Translate(Vector3.forward * Time.deltaTime*1.0);
    }

    if (currentState.nameHash == locoState){
        //TODO - possibly have to do a check on falling state
        //     - when the player is Grounded then go back to locomotion
        if(Input.GetButtonDown("Jump"))
        {
            anim.SetBool("Jump", true);
        }
        if(IsDoubleJump == true){
            IsDoubleJump = false;
            anim.SetBool("IsDoubleJump", false);
            anim.SetBool("HasDoubleJumped", false);
        }
    }
    else if(currentState.nameHash == jumpState){
        //  ..and not still in transition..
        if(!anim.IsInTransition(0)){
            anim.SetBool("Jump", false);
        }

        //If Jump pressed again
        if(Input.GetButtonDown("Jump"))
        {
            anim.SetBool("IsDoubleJump", true);
            IsDoubleJump = true;
        }
        //If in double jump
        else if(IsDoubleJump == true){
                transform.Translate(Vector3.up * Time.deltaTime*1.0);
                anim.SetBool("HasDoubleJumped", true);
                HasDoubleJumped = true;
        }

    }

    //Left Ctrl
    if(Input.GetButtonDown("Fire1")){
        anim.SetBool("Attack2", true);
    } else anim.SetBool("Attack2", false);

    //Left Alt
    if(Input.GetButtonDown("Fire2")){
        anim.SetBool("Attack", true);
    } else anim.SetBool("Attack", false);

    //Left Cmd
    if(Input.GetButtonDown("Fire3")){
        anim.SetBool("Toss", true);
        anim.SetBool("Catch", false);
    } else anim.SetBool("Toss", false);

    //Left Cmd
    if(Input.GetButtonDown("Catch")){
        anim.SetBool("Catch", true);
    }

}
