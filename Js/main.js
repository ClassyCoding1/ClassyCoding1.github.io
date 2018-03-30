async function LoadBlogPostHeader()
{
    jQuery(document).ready(function(){
        jQuery("#HeaderContainer").load("RepeatedElements.html #BlogPostHeader");
    });
}
async function LoadBlogPostHead()
{
    jQuery(document).ready(function(){
        jQuery("#head").load("RepeatedElements.html #head");
    });
}