import React from "react";

export default function GroupAvatars() {
  return (
    <div className="avatar-group -space-x-6">
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-secondary">
          <img
            src="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-secondary">
          <img
            src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-secondary">
          <img
            src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="placeholder avatar">
        <div className="w-10 bg-secondary-focus text-sm font-medium text-neutral-content">
          <span>+12</span>
        </div>
      </div>
    </div>
  );
}
