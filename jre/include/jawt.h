

#ifndef _JAVASOFT_JAWT_H_
#define _JAVASOFT_JAWT_H_

#include "jni.h"

#ifdef __cplusplus
extern "C" {
#endif

typedef struct jawt_Rectangle {
    jint x;
    jint y;
    jint width;
    jint height;
} JAWT_Rectangle;

struct jawt_DrawingSurface;


typedef struct jawt_DrawingSurfaceInfo {
    
    void* platformInfo;
    /* Cached pointer to the underlying drawing surface */
    struct jawt_DrawingSurface* ds;
    /* Bounding rectangle of the drawing surface */
    JAWT_Rectangle bounds;
    /* Number of rectangles in the clip */
    jint clipSize;
    /* Clip rectangle array */
    JAWT_Rectangle* clip;
} JAWT_DrawingSurfaceInfo;

#define JAWT_LOCK_ERROR                 0x00000001
#define JAWT_LOCK_CLIP_CHANGED          0x00000002
#define JAWT_LOCK_BOUNDS_CHANGED        0x00000004
#define JAWT_LOCK_SURFACE_CHANGED       0x00000008


typedef struct jawt_DrawingSurface {
    
    JNIEnv* env;
   
    jobject target;
    
    jint (JNICALL *Lock)
        (struct jawt_DrawingSurface* ds);
    
    JAWT_DrawingSurfaceInfo* (JNICALL *GetDrawingSurfaceInfo)
        (struct jawt_DrawingSurface* ds);
    /*
     * Free the drawing surface info.
     */
    void (JNICALL *FreeDrawingSurfaceInfo)
        (JAWT_DrawingSurfaceInfo* dsi);
    /*
     * Unlock the drawing surface of the target component for native rendering.
     */
    void (JNICALL *Unlock)
        (struct jawt_DrawingSurface* ds);
} JAWT_DrawingSurface;

/*
 * JAWT
 * Structure for containing native AWT functions.
 */
typedef struct jawt {
  
    jint version;
   
    JAWT_DrawingSurface* (JNICALL *GetDrawingSurface)
        (JNIEnv* env, jobject target);
    /*
     * Free the drawing surface allocated in GetDrawingSurface.
     */
    void (JNICALL *FreeDrawingSurface)
        (JAWT_DrawingSurface* ds);
    /*
     * Since 1.4
     * Locks the entire AWT for synchronization purposes
     */
    void (JNICALL *Lock)(JNIEnv* env);
    /*
     * Since 1.4
     * Unlocks the entire AWT for synchronization purposes
     */
    void (JNICALL *Unlock)(JNIEnv* env);
   
    jobject (JNICALL *GetComponent)(JNIEnv* env, void* platformInfo);

   
    jobject (JNICALL *CreateEmbeddedFrame) (JNIEnv *env, void* platformInfo);

   
    void (JNICALL *SetBounds) (JNIEnv *env, jobject embeddedFrame,
            jint x, jint y, jint w, jint h);
    
    void (JNICALL *SynthesizeWindowActivation) (JNIEnv *env,
            jobject embeddedFrame, jboolean doActivate);
} JAWT;


_JNI_IMPORT_OR_EXPORT_
jboolean JNICALL JAWT_GetAWT(JNIEnv* env, JAWT* awt);


#define JAWT_VERSION_1_3 0x00010003
#define JAWT_VERSION_1_4 0x00010004
#define JAWT_VERSION_1_7 0x00010007
#define JAWT_VERSION_9 0x00090000

#ifdef __cplusplus
} /* extern "C" */
#endif

#endif /* !_JAVASOFT_JAWT_H_ */
